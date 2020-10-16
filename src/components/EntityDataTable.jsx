import React, { } from 'react'
import { Table, TableHead, TableRowHead, TableCellHead, TableBody, TableRow, TableCell, Button } from '@dhis2/ui'

class EntityDataTable extends React.Component {

    render(){
    return (
        <Table>
            <TableHead>
                <TableRowHead>
                    <TableCellHead>
                        First name
                    </TableCellHead>
                    <TableCellHead>
                        Surname
                    </TableCellHead>
                    <TableCellHead>
                        Incident date
                    </TableCellHead>
                    <TableCellHead>
                        Last updated
                    </TableCellHead>
                    <TableCellHead>
                        Age
                    </TableCellHead>
                    <TableCellHead>
                        Phone
                    </TableCellHead>
                    <TableCellHead>
                        Status
                    </TableCellHead>
                    <TableCellHead>
                        Button
                    </TableCellHead>
                </TableRowHead>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        Onyekachukwu
                    </TableCell>
                    <TableCell>
                        Kariuki
                    </TableCell>
                    <TableCell>
                        02/06/2007
                    </TableCell>
                    <TableCell>
                        05/25/1972
                    </TableCell>
                    <TableCell>
                        66
                    </TableCell>
                    <TableCell>
                        Jawi
                    </TableCell>
                    <TableCell>
                        Sofie Hubert
                    </TableCell>
                    <TableCell
                        dataTest="dhis2-uicore-tablecell"
                        dense
                    >
                    
                        
                        
<Button
  dataTest="dhis2-uicore-button"
  name="Primary button"
  onClick={function logger(_ref){var name=_ref.name,value=_ref.value;return console.info("".concat(name,": ").concat(value))}}
  primary
  type="button"
  value="default">Tracker</Button>

                        
                        
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>  
    )
}
}

export { EntityDataTable }