import React, { useEffect } from "react";
import { useDataQuery, useConfig } from "@dhis2/app-runtime";
import { ModalContacts } from "../components/ModalContacts.jsx";
import { DataTable } from "../components/EntityDataTable.jsx";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { InfoMessage } from "../components/InfoMessage.jsx";
import { ContactsApi } from "../data/ContactsApi.js";
import styles from "../App.module.css";
import {
  TableCell,
  TableRow,
  Button,
  ButtonStrip,
  CircularLoader,
  Tag,
  Modal,
  ModalTitle,
  ModalContent,
  ModalActions,
} from "@dhis2/ui";
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

// går gjennom alle relasjonene til tei og sjekker om item er en av de.
export function filterTableRelationship(item, relations, tei) {
  let contactsToTei = getRelationsToTei(relations, tei).filter(
    (relationship) =>
      relationship == item.trackedEntityInstance && relationship != tei
  );

  if (contactsToTei.length > 0) return item;
}

// går gjennom relasjonsobjekter til valgt tei og returnerer alle dens tei-relasjoner
function getRelationsToTei(relations, tei) {
  let relationsTei = [];

  relations.map((relationship) => {
    let fromTei = relationship.from.trackedEntityInstance.trackedEntityInstance;
    let toTei = relationship.to.trackedEntityInstance.trackedEntityInstance;

    if (fromTei != tei) {
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
    return <ErrorMessage />;
  }
  if (loading) {
    return <CircularLoader />;
  }

  const relations = data.Relations.trackedEntityInstances.filter((item) =>
    findValueEnrollments(item.enrollments[0], props.from, props.to, "item")
  );

  tableLength = relations.length;
  if (tableLength === 0) {
    return <InfoMessage />;
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
                ) === "ACTIVE"
                  ? true
                  : false && styles.positive
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
            <ModalContacts
              toggle={(show) => <Button onClick={show}> View contacts </Button>}
              content={(hide) => (
                <Modal dataTest="dhis2-uicore-modal" large position="middle">
                  <ModalTitle dataTest="dhis2-uicore-modaltitle">
                    Overview of Contacts
                  </ModalTitle>
                  <ModalContent dataTest="dhis2-uicore-modalcontent">
                    <DataTable
                      headlines={[
                        "First name",
                        "Surname",
                        "Incident date",
                        "Last updated",
                        "Age",
                        "Phone",
                        "Status",
                        "Due date",
                        "Tracker Capture",
                      ]}
                      api={
                        <ContactsApi
                          from={props.from}
                          to={props.to}
                          tei={trackedEntityInstance}
                          relationsObject={relationships}
                          setTaskCount={() => {}}
                        />
                      }
                    />
                  </ModalContent>
                  <ModalActions>
                    <ButtonStrip>
                      <Button onClick={hide}>Close</Button>
                    </ButtonStrip>
                  </ModalActions>
                </Modal>
              )}
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
              Track Entity
            </Button>
          </TableCell>
        </TableRow>
      );
    }
  );
};

export { RelationsApi };
