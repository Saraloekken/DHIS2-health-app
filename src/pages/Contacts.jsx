import React, { Component } from 'react';
import { DataTable } from "../components/EntityDataTable.jsx";
import { ContactsApi, IndexCasesApi, RelationsApi } from '../data/Api';

class Contacts extends React.Component {
    render(){
        return ( 
            <div>
                <h2>Contacts</h2>
                <DataTable api={<ContactsApi />} />
            </div>
             
        )   
    }
}
export { Contacts }


