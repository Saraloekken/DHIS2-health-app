import React, { useEffect } from "react";
import { useDataQuery, useConfig } from "@dhis2/app-runtime";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { InfoMessage } from "../components/InfoMessage.jsx";
import { filterTableRelationship } from "../data/RelationsApi";
import { TableCell, TableRow, Button, CircularLoader, Tag } from "@dhis2/ui";
import { StatusColourApi } from "../data/StatusColourApi.js";
import {
  findValueAttributes,
  findValueEnrollments,
} from "../data/ApiFunctions.js";
import getDaysForwardDate from "../components/Filters.jsx";

const query = {
  Contacts: {
    resource: "trackedEntityInstances",
    params: {
      ou: "EwEP9IhOwuw",
      program: "DM9n1bUw8W8",
      fields: [
        "trackedEntityInstance",
        "attributes",
        "lastUpdated",
        "enrollments[*]",
      ],
    },
  },
};

const ContactsApi = (props) => {
  const { loading, error, data } = useDataQuery(query);
  const { baseUrl } = useConfig();
  let from = props.from;
  let to = props.to;

  let tableLength = 0;

  useEffect(() => {
    props.setTaskCount(tableLength);
  });

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

  if (props.tei) {
    from = getDaysForwardDate(-60);
    to = getDaysForwardDate(60);
  }

  const contacts = data.Contacts.trackedEntityInstances.filter((item) =>
    props.tei
      ? filterTableRelationship(item, props.relationsObject, props.tei)
      : findValueEnrollments(item.enrollments[0], from, to, "item")
  );

  tableLength = contacts.length;
  if (tableLength === 0) {
    return (
      <TableRow>
        <TableCell>
          <InfoMessage />
        </TableCell>
      </TableRow>
    );
  }

  return contacts.map(
    ({ trackedEntityInstance, attributes, lastUpdated, enrollments }) => {
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
            <StatusColourApi enrollments={enrollments[0]} from={from} to={to} />
          </TableCell>
          <TableCell>
            {findValueEnrollments(enrollments[0], from, to, "dueDate")}
          </TableCell>
          <TableCell dense>
            <Button
              name="Primary button"
              onClick={() =>
                window.open(
                  `${baseUrl}/dhis-web-tracker-capture/index.html#/dashboard?tei=${trackedEntityInstance}&program=DM9n1bUw8W8&ou=EwEP9IhOwuw`
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

export { ContactsApi };
