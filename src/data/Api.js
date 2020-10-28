import React from "react";
import { useDataQuery, useConfig } from "@dhis2/app-runtime";
import { TableCell, TableRow, Button, CircularLoader } from "@dhis2/ui";

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
      ],
    },
  },
};

function getDaysForwardDate(days) {
  const today = new Date();
  const daysForward = new Date(today);
  daysForward.setDate(daysForward.getDate() + days);
  let dd = String(daysForward.getDate()).padStart(2, "0");
  let mm = String(daysForward.getMonth() + 1).padStart(2, "0");
  let yyyy = daysForward.getFullYear();

  return yyyy + "-" + mm + "-" + dd;
}

function findValue(attributes, valueCode) {
  return attributes.find((item) => item.code === valueCode)
    ? attributes.find((item) => item.code === valueCode).value
    : "not defined";
}

function filterTable(item) {
  let filteredEvents = item.events.filter(
    (event) =>
      event.status != "COMPLETED" &&
      event.dueDate.slice(0, 10) <= getDaysForwardDate(0) // today as default
    // getDaysForwardDate(1) > tomorrow
    // getDaysForwardDate(7) > a week
  );

  if (filteredEvents[0] && item.status == "ACTIVE") return item;
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
  return earliestDueDate ? earliestDueDate.substring(0, 10) : "not defined";
}

// evt lage en funksjon som formaterer om datoene til dd/mm/yyyy
//new Intl.DateTimeFormat("en-GB", {
//  year: "numeric",
//  month: "2-digit",
//  day: "2-digit",
//}).format(new Date(enrollments[0].events[0].dueDate))

const IndexCasesApi = () => {
  const { loading, error, data } = useDataQuery(query);
  const { baseUrl } = useConfig();

  if (error) {
    return <p>{`ERROR: ${error.message}`}</p>;
  }
  if (loading) {
    return <CircularLoader />;
  }

  return data.IndexCases.trackedEntityInstances
    .filter((item) => filterTable(item.enrollments[0]))
    .map(({ trackedEntityInstance, attributes, lastUpdated, enrollments }) => (
      <TableRow>
        <TableCell>{findValue(attributes, "first_name")}</TableCell>
        <TableCell>{findValue(attributes, "surname")}</TableCell>
        <TableCell>
          {enrollments[0]
            ? enrollments[0].incidentDate.substring(0, 10)
            : "not defined"}
        </TableCell>
        <TableCell>{lastUpdated.substring(0, 10)}</TableCell>
        <TableCell>{findValue(attributes, "patinfo_ageonset")}</TableCell>
        <TableCell>{findValue(attributes, "phone_local")}</TableCell>
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
            Tracker Capture
          </Button>
        </TableCell>
      </TableRow>
    ));
};

const ContactsApi = () => {
  const { loading, error, data } = useDataQuery(query);
  const { baseUrl } = useConfig();

  if (error) {
    return <p>{`ERROR: ${error.message}`}</p>;
  }
  if (loading) {
    return <CircularLoader />;
  }

  return data.Contacts.trackedEntityInstances
    .filter((item) => filterTable(item.enrollments[0]))
    .map(({ trackedEntityInstance, attributes, lastUpdated, enrollments }) => (
      <TableRow>
        <TableCell>{findValue(attributes, "first_name")}</TableCell>
        <TableCell>{findValue(attributes, "surname")}</TableCell>
        <TableCell>
          {enrollments[0]
            ? enrollments[0].incidentDate.substring(0, 10)
            : "not defined"}
        </TableCell>
        <TableCell>{lastUpdated.substring(0, 10)}</TableCell>
        <TableCell>{findValue(attributes, "patinfo_ageonset")}</TableCell>
        <TableCell>{findValue(attributes, "phone_local")}</TableCell>
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
            Tracker Capture
          </Button>
        </TableCell>
      </TableRow>
    ));
};

const RelationsApi = () => {
  const { loading, error, data } = useDataQuery(query);
  const { baseUrl } = useConfig();

  if (error) {
    return <p>{`ERROR: ${error.message}`}</p>;
  }
  if (loading) {
    return <CircularLoader />;
  }

  return data.Relations.trackedEntityInstances
    .filter((item) => filterTable(item.enrollments[0]))
    .map(({ trackedEntityInstance, attributes, lastUpdated, enrollments }) => (
      <TableRow>
        <TableCell>{findValue(attributes, "first_name")}</TableCell>
        <TableCell>{findValue(attributes, "surname")}</TableCell>
        <TableCell>
          {enrollments[0]
            ? enrollments[0].incidentDate.substring(0, 10)
            : "not defined"}
        </TableCell>
        <TableCell>{lastUpdated.substring(0, 10)}</TableCell>
        <TableCell>{findValue(attributes, "patinfo_ageonset")}</TableCell>
        <TableCell>{findValue(attributes, "phone_local")}</TableCell>
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
            Tracker Capture
          </Button>
        </TableCell>
      </TableRow>
    ));
};

export { IndexCasesApi, ContactsApi, RelationsApi };
