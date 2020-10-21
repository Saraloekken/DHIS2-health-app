import React, { Component } from 'react';
import { CaseTable } from "../components/EntityDataTable.jsx";
import { ContactsApi, IndexCasesApi, RelationsApi } from '../data/Api';

class Contacts extends React.Component {
    render(){
        return ( 
            <div>
                <h2>Contacts</h2>
                <CaseTable api={<ContactsApi />} />
            </div>
             
        )   
    }
}
export { Contacts }


