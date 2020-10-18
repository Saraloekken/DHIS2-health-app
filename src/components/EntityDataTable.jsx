import React from "react";
import {
  Table,
  TableHead,
  TableRowHead,
  TableCellHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  NoticeBox,
  CircularLoader,
} from "@dhis2/ui";
import findValue from "../data/Api";
import { useDataQuery } from "@dhis2/app-runtime";

// Formater dato

const generateRows = ({ trackedEntityInstances }) => {
    return trackedEntityInstances.map((item) => (
            <TableRow>
              <TableCell>{findValue(item.attributes, "first_name")}</TableCell>
              <TableCell>{findValue(item.attributes, "surname")}</TableCell>
              <TableCell>{item.enrollments[0].incidentDate}</TableCell>
              <TableCell>{item.lastUpdated}</TableCell>
              <TableCell>{findValue(item.attributes, "patinfo_ageonset")}</TableCell>
              <TableCell>{findValue(item.attributes, "phone_local")}</TableCell>
              <TableCell>{item.enrollments[0].status}</TableCell>
              <TableCell dataTest="dhis2-uicore-tablecell" dense>
                <Button
                  dataTest="dhis2-uicore-button"
                  name="Primary button"
                  onClick={function logger(_ref) {
                    var name = _ref.name,
                      value = _ref.value;
                    return console.info("".concat(name, ": ").concat(value));
                  }}
                  primary
                  type="button"
                  value="default"
                >
                  Tracker Capture
                </Button>
              </TableCell>
            </TableRow>
        ))}
    

export const EntityDataTable = () => {

  const query = {
    IndexCases: {
      resource: "trackedEntityInstances",
      params: {
        ou: "EwEP9IhOwuw",
        program: "uYjxkTbwRNf",
        fields: ["trackedEntityInstance", "attributes", "lastUpdated", "enrollments"],
      },
    },
    Contacts: {
      resource: "trackedEntityInstances",
      params: {
        ou: "EwEP9IhOwuw",
        program: "DM9n1bUw8W8",
        fields: ["trackedEntityInstance", "attributes", "lastUpdated", "enrollments"],
      },
    },
  };

  const { loading, error, data } = useDataQuery(query);

  if (loading) {
    return <CircularLoader />;
  }

  if (error) {
    return (
      <NoticeBox error title={"Could not retrive the EntityDataTable"}>
        Could not retrive the EntityDataTable. Please try again later.
      </NoticeBox>
    );
  }

  return (
    <Table>
      <TableHead>
        <TableRowHead>
          <TableCellHead>First name</TableCellHead>
          <TableCellHead>Surname</TableCellHead>
          <TableCellHead>Incident date</TableCellHead>
          <TableCellHead>Last updated</TableCellHead>
          <TableCellHead>Age</TableCellHead>
          <TableCellHead>Phone</TableCellHead>
          <TableCellHead>Status</TableCellHead>
        </TableRowHead>
      </TableHead>
      <TableBody>
        {generateRows(data.IndexCases)}
        {generateRows(data.Contacts)}
      </TableBody>
    </Table>
  );
};

export default EntityDataTable;
