import React, { useEffect } from "react";
import { useDataQuery, useConfig } from "@dhis2/app-runtime";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { InfoMessage } from "../components/InfoMessage.jsx";
import { filterTableRelationship } from "../data/RelationsApi";
import { TableCell, TableRow, Button, CircularLoader, Tag } from "@dhis2/ui";
import {
  findValue,
  filterTable,
  findDueDate,
  findStatus,
} from "../data/ApiFunctions.js";

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

  let tableLength = 0;

  useEffect(() => {
    props.setTaskCount(tableLength);
  });

  if (error) {
    return <ErrorMessage />;
  }
  if (loading) {
    return <CircularLoader />;
  }

  const contacts = data.Contacts.trackedEntityInstances.filter((item) =>
    props.tei
      ? filterTableRelationship(item, props.relObject, props.tei)
      : filterTable(item.enrollments[0], props.from, props.to)
  );

  tableLength = contacts.length;
  if (tableLength === 0) {
    return <InfoMessage />;
  }

  return contacts.map(
    ({ trackedEntityInstance, attributes, lastUpdated, enrollments }) => (
      <TableRow>
        <TableCell>{findValue(attributes, "first_name")}</TableCell>
        <TableCell>{findValue(attributes, "surname")}</TableCell>
        <TableCell>
          {enrollments[0]
            ? enrollments[0].incidentDate.substring(0, 10)
            : "None"}
        </TableCell>
        <TableCell>{lastUpdated.substring(0, 10)}</TableCell>
        <TableCell>{findValue(attributes, "patinfo_ageonset")}</TableCell>
        <TableCell>{findValue(attributes, "phone_local")}</TableCell>
        <TableCell>
          <Tag
            dataTest="dhis2-uicore-tag"
            neutral={findStatus(enrollments[0]) === "SCHEDULE" ? true : false}
            positive={findStatus(enrollments[0]) === "ACTIVE" ? true : false}
            default={findStatus(enrollments[0]) === "VISITED" ? true : false}
            negative={findStatus(enrollments[0]) === "OVERDUE" ? true : false}
          >
            {findStatus(enrollments[0])}
          </Tag>
        </TableCell>
        <TableCell>{findDueDate(enrollments[0])}</TableCell>
        <TableCell dataTest="dhis2-uicore-tablecell" dense>
          <Button
            dataTest="dhis2-uicore-button"
            name="Primary button"
            onClick={() =>
              (window.location = `${baseUrl}/dhis-web-tracker-capture/index.html#/dashboard?tei=${trackedEntityInstance}&program=DM9n1bUw8W8&ou=EwEP9IhOwuw`)
            }
            primary
            type="button"
            value="default"
          >
            Track Entity
          </Button>
        </TableCell>
      </TableRow>
    )
  );
};

export { ContactsApi };
