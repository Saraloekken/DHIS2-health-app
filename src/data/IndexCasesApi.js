import React, { useEffect, useState } from "react";
import { useDataQuery, useConfig } from "@dhis2/app-runtime";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { InfoMessage } from "../components/InfoMessage.jsx";
import { TableCell, TableRow, Button, CircularLoader, Tag } from "@dhis2/ui";
import styles from "../App.module.css";
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
    return <ErrorMessage />;
  }
  if (loading) {
    return <CircularLoader />;
  }

  const indexCases = data.IndexCases.trackedEntityInstances //endre fra return til const (mellomlagre verdien, istedet for å returnere den direkte)
    .filter((item) =>
      findValueEnrollments(item.enrollments[0], props.from, props.to, "item")
    );

  tableLength = indexCases.length;
  if (tableLength === 0) {
    return <InfoMessage />;
  }

  return indexCases.map(
    ({ trackedEntityInstance, attributes, lastUpdated, enrollments }) => {
      const isOverdue = findOverdue(enrollments[0], props.from, props.to);

      return (
        <TableRow>
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
            <Tag
              dataTest="dhis2-uicore-tag"
              className={
                !isOverdue &&
                findValueEnrollments(
                  enrollments[0],
                  props.from,
                  props.to,
                  "status"
                ) === "ACTIVE" &&
                styles.positive
              }
              neutral={
                !isOverdue &&
                findValueEnrollments(
                  enrollments[0],
                  props.from,
                  props.to,
                  "status"
                ) === "SCHEDULE"
                  ? true
                  : false
              }
              default={
                findValueEnrollments(
                  enrollments[0],
                  props.from,
                  props.to,
                  "status"
                ) === "VISITED"
                  ? true
                  : false
              }
              negative={isOverdue}
            >
              {isOverdue
                ? "OVERDUE"
                : findValueEnrollments(
                    enrollments[0],
                    props.from,
                    props.to,
                    "status"
                  )}
            </Tag>
          </TableCell>
          <TableCell>
            {findValueEnrollments(
              enrollments[0],
              props.from,
              props.to,
              "dueDate"
            )}
          </TableCell>
          <TableCell dataTest="dhis2-uicore-tablecell" dense>
            <Button
              dataTest="dhis2-uicore-button"
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
              Track Entity
            </Button>
          </TableCell>
        </TableRow>
      );
    }
  );
};

export { IndexCasesApi };
