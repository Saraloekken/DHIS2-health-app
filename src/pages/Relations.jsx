import React, { Component } from 'react';
import { IndexCasesTable, ContactsTable } from "../components/EntityDataTable.jsx";

class Relations extends React.Component {
    render(){
        return (
            <>
            <h2>Relations</h2>
            <IndexCasesTable />
            <ContactsTable />
            </>
        )   
    }
}
export { Relations }

