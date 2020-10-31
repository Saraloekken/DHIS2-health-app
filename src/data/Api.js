import React from "react";
import { useDataQuery, useConfig } from "@dhis2/app-runtime";
import { ModalContacts } from "../components/ModalContacts.jsx";
import { DataTable } from "../components/EntityDataTable.jsx";
import {
  TableCell,
  TableRow,
  Button,
  ButtonStrip,
  CircularLoader,
  Tag,
  Modal,
  ModalContent,
  ModalActions,
} from "@dhis2/ui";
import getDaysForwardDate from "../components/Filters.jsx";

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

function findValue(attributes, valueCode) {
  return attributes.find((item) => item.code === valueCode)
    ? attributes.find((item) => item.code === valueCode).value
    : "None";
}

function sliceDate(date) {
  return date.slice(0, 10);
}

function filterTable(item, fromDay, toDay) {
  //let today = getDaysForwardDate(0);
  //if (fromDay == today && toDay == today) {
  //  fromDay = "2019-01-01";
  //}
  let filteredEvents = item.events.filter(
    (event) =>
      event.status != "COMPLETED" &&
      sliceDate(event.dueDate) >= fromDay &&
      sliceDate(event.dueDate) <= toDay
  );
  if (filteredEvents[0] && item.status != "COMPLETED") return item;
}

function findDueDate(item) {
  let earliestDueDate;

  for (let i = 0, len = item.events.length; i < len; i++) {
    let event = item.events[i];

    if (
      event.status != "COMPLETED" &&
      (event.dueDate < earliestDueDate || typeof earliestDueDate == "undefined")
    ) {
      earliestDueDate = event.dueDate;
    }
  }
  return earliestDueDate ? earliestDueDate.substring(0, 10) : "None";
}

function findStatus(item) {
  let earliestDueDate;
  let checkStatus;

  for (let i = 0, len = item.events.length; i < len; i++) {
    let event = item.events[i];

    if (
      event.status != "COMPLETED" &&
      (event.dueDate < earliestDueDate || typeof earliestDueDate == "undefined")
    ) {
      earliestDueDate = event.dueDate;
      checkStatus = event.status;
    }
  }
  return checkStatus ? checkStatus.substring(0, 10) : "None";
}

const IndexCasesApi = (props) => {
  const { loading, error, data } = useDataQuery(query);
  const { baseUrl } = useConfig();

  if (error) {
    return <p>{`ERROR: ${error.message}`}</p>;
  }
  if (loading) {
    return <CircularLoader />;
  }

  return data.IndexCases.trackedEntityInstances
    .filter((item) => filterTable(item.enrollments[0], props.from, props.to))
    .map(({ trackedEntityInstance, attributes, lastUpdated, enrollments }) => (
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
          <Tag dataTest="dhis2-uicore-tag" neutral>
            {findStatus(enrollments[0])}
          </Tag>
        </TableCell>
        <TableCell>{findDueDate(enrollments[0])}</TableCell>
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
    ));
};

const ContactsApi = (props) => {
  const { loading, error, data } = useDataQuery(query);
  const { baseUrl } = useConfig();

  if (error) {
    return <p>{`ERROR: ${error.message}`}</p>;
  }
  if (loading) {
    return <CircularLoader />;
  }

  return data.Contacts.trackedEntityInstances
    .filter((item) =>
      props.tei
        ? filterTableRelationship(item, props.relObject, props.tei)
        : filterTable(item.enrollments[0], props.from, props.to)
    )
    .map(({ trackedEntityInstance, attributes, lastUpdated, enrollments }) => (
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
          <Tag dataTest="dhis2-uicore-tag" neutral>
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
    ));
};

// går gjennom alle contact-entities og sjekker om noen av de er relasjonen til tei. Derfor vil kun enrolled entiteter dukke opp...
function filterTableRelationship(item, relObject, tei) {
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

/*
  Hvordan mappe relationships:
  1. Lag en hjelpemetode som kan få ut riktig relationship
    1.1 Send inn trackedEntityInstance (IDen) og et relationship objekt
    1.2 Sjekk om "from" objektet sin trackedEntityInstance ID er ulik den du sendte med i paramter
    1.3 Er den ulik så returnerer du "from" sin trackedEntityInstance ID, 
        hvis ikke så velger du "to" objektet sin trackedEntityInstance
  
  2. Map gjennom relationship objektene og hent ut kontaktene (de som er ulik fra trackedEntityInstance) 
     ved hjelp av hjelpemetoden
  
  3. Gjør kall på resource: "relationship" 

*/

const RelationsApi = (props) => {
  const { loading, error, data } = useDataQuery(query);
  const { baseUrl } = useConfig();

  if (error) {
    return <p>{`ERROR: ${error.message}`}</p>;
  }
  if (loading) {
    return <CircularLoader />;
  }

  return data.Relations.trackedEntityInstances
    .filter((item) => filterTable(item.enrollments[0], props.from, props.to))
    .map(
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
            <Tag dataTest="dhis2-uicore-tag" neutral>
              {findStatus(enrollments[0])}
            </Tag>
          </TableCell>{" "}
          <TableCell>{findDueDate(enrollments[0])}</TableCell>
          <TableCell dataTest="dhis2-uicore-tablecell" dense>
            <ModalContacts
              toggle={(show) => <Button onClick={show}> View contacts </Button>}
              content={(hide) => (
                <Modal dataTest="dhis2-uicore-modal" position="middle">
                  <ModalContent dataTest="dhis2-uicore-modalcontent">
                    <DataTable
                      headlines={[
                        "First name",
                        "Surname",
                        "Age",
                        "Phone",
                        "Status",
                      ]}
                      api={
                        <ContactsApi
                          from={props.from}
                          to={props.to}
                          tei={trackedEntityInstance}
                          relObject={relationships}
                        />
                      } // her plasseres tableCell innhold som avhenger av hvilken tei man har trykket på!! husk
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

export { IndexCasesApi, ContactsApi, RelationsApi };
