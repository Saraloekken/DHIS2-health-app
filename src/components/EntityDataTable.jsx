import React, { } from 'react'
import { Table, TableHead, TableRowHead, TableCellHead, TableBody, TableRow, TableCell} from '@dhis2/ui'


function EntityDataTable(props) {
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
                    <TableButton />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>  
    )
}

export { EntityDataTable }