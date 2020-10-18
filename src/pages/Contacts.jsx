import React, { Component } from 'react';
import { ContactsTable } from "../components/EntityDataTable.jsx";

class Contacts extends React.Component {
    render(){

        return (
        
            <>
            <h2>Contacts</h2>
            <ContactsTable/>
            </>
        
        
        )   
    }
}
export { Contacts }


