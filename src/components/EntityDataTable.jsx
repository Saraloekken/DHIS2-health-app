import React from "react";
import { Table, TableHead, TableRowHead, TableCellHead, TableBody } from "@dhis2/ui";

const DataTable = (props) => {
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
          <TableCellHead>Capture</TableCellHead>
        </TableRowHead>
      </TableHead>
      <TableBody>
        {props.api}
      </TableBody>
    </Table>
  )
};


export { DataTable };
