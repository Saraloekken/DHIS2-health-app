import React, { useEffect } from "react";
import { useDataQuery, useConfig } from "@dhis2/app-runtime";
import { ModalContacts } from "../components/ModalContacts.jsx";
import { DataTable } from "../components/EntityDataTable.jsx";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { InfoMessage } from "../components/InfoMessage.jsx";
import { ContactsApi } from "../data/ContactsApi.js";
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
  findValue,
  filterTable,
  findDueDate,
  findStatus,
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

// går gjennom alle contact-entities og sjekker om noen av de er relasjonen til tei. Derfor vil kun enrolled entiteter dukke opp...
export function filterTableRelationship(item, relObject, tei) {
  let relationships = relationshipsToTei(relObject, tei);
  let itemList = relationships.filter(
    (relationship) =>
      relationship == item.trackedEntityInstance && relationship != tei
  );

  if (itemList[0]) return item;
}

// går gjennom relasjonsobjekter til valgt tei og returnerer alle dens tei-relasjoner
function relationshipsToTei(relObject, tei) {
  let relList = [];

  relObject.map((relationship) => {
    let fromTei = relationship.from.trackedEntityInstance.trackedEntityInstance;
    let toTei = relationship.to.trackedEntityInstance.trackedEntityInstance;

    if (fromTei != tei) {
      relList.push(fromTei);
    }
    relList.push(toTei);
  });

  return relList;
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
    filterTable(item.enrollments[0], props.from, props.to)
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
    }) => (
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
            positive={findStatus(enrollments[0]) === "SCHEDULE" ? true : false}
            neutral={findStatus(enrollments[0]) === "ACTIVE" ? true : false}
            default={findStatus(enrollments[0]) === "VISITED" ? true : false}
            negative={findStatus(enrollments[0]) === "OVERDUE" ? true : false}
          >
            {findStatus(enrollments[0])}
          </Tag>
        </TableCell>{" "}
        <TableCell>{findDueDate(enrollments[0])}</TableCell>
        <TableCell dataTest="dhis2-uicore-tablecell" dense>
          <ModalContacts
            toggle={(show) => <Button onClick={show}> View contacts </Button>}
            content={(hide) => (
              <Modal dataTest="dhis2-uicore-modal" large position="middle">
                <ModalTitle dataTest="dhis2-uicore-modaltitle">
                  Overview of Contacts (X)
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
                        relObject={relationships}
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
              (window.location = `${baseUrl}/dhis-web-tracker-capture/index.html#/dashboard?tei=${trackedEntityInstance}&program=uYjxkTbwRNf&ou=EwEP9IhOwuw`)
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

export { RelationsApi };
