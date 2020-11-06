import React, { useEffect } from "react";
import { useDataQuery, useConfig } from "@dhis2/app-runtime";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { InfoMessage } from "../components/InfoMessage.jsx";
import { ModalApi } from "../data/ModalApi.js";
import styles from "../App.module.css";
import { TableCell, TableRow, Button, CircularLoader, Tag } from "@dhis2/ui";
import {
  findOverdue,
  findValueAttributes,
  findValueEnrollments,
} from "../data/ApiFunctions.js";

const query = {
  Relations: {
    resource: "trackedEntityInstances",
    params: {
      ou: "EwEP9IhOwuw",
      program: "uYjxkTbwRNf",
      fields: [
        "trackedEntityInstance",
        "attributes",
        "lastUpdated",
        "enrollments[*]",
        "relationships[*]",
      ],
    },
  },
};

// Go through tei-relations and return contact-item if they are a part of contacts
export function filterTableRelationship(item, relations, tei) {
  const contactsToTei = getRelationsToTei(relations, tei).filter(
    (relationship) =>
      relationship === item.trackedEntityInstance && relationship !== tei
  );

  if (contactsToTei.length > 0) return item;
}

// Go through relations-objects to tei and returns all tei-relations
function getRelationsToTei(relations, tei) {
  const relationsTei = [];

  relations.map((relationship) => {
    const fromTei =
      relationship.from.trackedEntityInstance.trackedEntityInstance;
    const toTei = relationship.to.trackedEntityInstance.trackedEntityInstance;

    if (fromTei !== tei) {
      relationsTei.push(fromTei);
    }
    relationsTei.push(toTei);
  });

  return relationsTei;
}

const RelationsApi = (props) => {
  const { loading, error, data } = useDataQuery(query);
  const { baseUrl } = useConfig();

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

  const relations = data.Relations.trackedEntityInstances.filter((item) =>
    findValueEnrollments(item.enrollments[0], props.from, props.to, "item")
  );

  tableLength = relations.length;
  if (tableLength === 0) {
    return (
      <TableRow>
        <TableCell>
          <InfoMessage />
        </TableCell>
      </TableRow>
    );
  }

  return relations.map(
    ({
      trackedEntityInstance,
      attributes,
      lastUpdated,
      enrollments,
      relationships,
    }) => {
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
          </TableCell>{" "}
          <TableCell>
            {findValueEnrollments(
              enrollments[0],
              props.from,
              props.to,
              "dueDate"
            )}
          </TableCell>
          <TableCell dataTest="dhis2-uicore-tablecell" dense>
            <ModalApi
              from={props.from}
              attributes={attributes}
              relationships={relationships}
              to={props.to}
              tei={trackedEntityInstance}
              relationsObject={relationships}
              setTaskCount={() => {}}
            />
          </TableCell>
          <TableCell dataTest="dhis2-uicore-tablecell" dense>
            <Button
              dataTest="dhis2-uicore-button"
              name="Primary button"
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

export { RelationsApi };
