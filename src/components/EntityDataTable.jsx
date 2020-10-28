import React from "react";
import { Table, TableHead, TableRowHead, TableCellHead, TableBody } from "@dhis2/ui";


class DataTable extends React.Component {

  createTableCellHead = () => {
    const array = this.props.headlines;
    return array.map((headline) => {
      return <TableCellHead>{headline}</TableCellHead>
    })
  };

  render() {
    return (
      <Table>
        <TableHead>
          <TableRowHead>
            {this.createTableCellHead()}
          </TableRowHead>
        </TableHead>
        <TableBody>
          {this.props.api}
        </TableBody>
      </Table>
    )
  }
};


export { DataTable };

