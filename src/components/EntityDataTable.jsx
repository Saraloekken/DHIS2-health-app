import React from "react";
import {
  Table,
  TableHead,
  TableRowHead,
  TableCellHead,
  TableBody,
} from "@dhis2/ui";
import { ContactsApi, IndexCasesApi, RelationsApi } from '../data/Api';

  function IndexCasesTable () {
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
            
            <IndexCasesApi />
          
        </TableBody>
      </Table>
      )
  };

  function ContactsTable () {
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
          
          <ContactsApi />
        
      </TableBody>
    </Table>
    )
    };

    function RelationsTable () {
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
              
              <RelationsApi />
            
          </TableBody>
        </Table>
        )
  
};

export { IndexCasesTable, ContactsTable, RelationsTable };
