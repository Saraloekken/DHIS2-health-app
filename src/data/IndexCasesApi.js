import React, { useEffect } from "react";
import { useDataQuery, useConfig } from "@dhis2/app-runtime";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { InfoMessage } from "../components/InfoMessage.jsx";
import { TableCell, TableRow, Button, CircularLoader } from "@dhis2/ui";
import { StatusColourApi } from "../data/StatusColourApi.js";
import {
  findOverdue,
  findValueAttributes,
  findValueEnrollments,
} from "../data/ApiFunctions.js";

const query = {
  IndexCases: {
    resource: "trackedEntityInstances",
    params: {
      ou: "EwEP9IhOwuw",
      program: "uYjxkTbwRNf",
      fields: [
        "trackedEntityInstance",
        "attributes",
        "lastUpdated",
        "enrollments[*]",
      ],
    },
  },
};

const IndexCasesApi = (props) => {
  let tableLength = 0;

  useEffect(() => {
    props.setTaskCount(tableLength);
  });

  const { loading, error, data } = useDataQuery(query);
  const { baseUrl } = useConfig();

  if (error) {
    return (
      <TableRow>
        <TableCell>
          <ErrorMessage />
        </TableCell>
      </TableRow>
    );
  }
  if (loading) {
    return (
      <TableRow>
        <TableCell>
          <CircularLoader />
        </TableCell>
      </TableRow>
    );
  }

  const indexCases = data.IndexCases.trackedEntityInstances.filter((item) =>
    findValueEnrollments(item.enrollments[0], props.from, props.to, "item")
  );

  tableLength = indexCases.length;
  if (tableLength === 0) {
    return (
      <TableRow>
        <TableCell>
          <InfoMessage />
        </TableCell>
      </TableRow>
    );
  }

  return indexCases.map(
    ({ trackedEntityInstance, attributes, lastUpdated, enrollments }) => {
      const isOverdue = findOverdue(enrollments[0], props.from, props.to);

      return (
        <TableRow key={trackedEntityInstance}>
          <TableCell>{findValueAttributes(attributes, "first_name")}</TableCell>
          <TableCell>{findValueAttributes(attributes, "surname")}</TableCell>
          <TableCell>
            {enrollments[0]
              ? enrollments[0].incidentDate.substring(0, 10)
              : "None"}
          </TableCell>
          <TableCell>{lastUpdated.substring(0, 10)}</TableCell>
          <TableCell>
            {findValueAttributes(attributes, "patinfo_ageonset")}
          </TableCell>
          <TableCell>
            {findValueAttributes(attributes, "phone_local")}
          </TableCell>
          <TableCell>
            <StatusColourApi
              enrollments={enrollments[0]}
              from={props.from}
              to={props.to}
              isOverdue={isOverdue}
            />
          </TableCell>
          <TableCell>
            {findValueEnrollments(
              enrollments[0],
              props.from,
              props.to,
              "dueDate"
            )}
          </TableCell>
          <TableCell dense>
            <Button
              name="Primary button"
              target="_blank"
              onClick={() =>
                window.open(
                  `${baseUrl}/dhis-web-tracker-capture/index.html#/dashboard?tei=${trackedEntityInstance}&program=uYjxkTbwRNf&ou=EwEP9IhOwuw`
                )
              }
              primary
              type="button"
              value="default"
            >
              Track entity
            </Button>
          </TableCell>
        </TableRow>
      );
    }
  );
};

export { IndexCasesApi };
