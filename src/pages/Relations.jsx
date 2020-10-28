
import React, { Component } from 'react';
import { DataTable } from "../components/EntityDataTable.jsx";
import { ContactsApi, IndexCasesApi, RelationsApi } from '../data/Api';

class Relations extends React.Component {
    render() {
        return (
            <div>
                <h2>Relations</h2>
                <DataTable
                    headlines={["First name", "Surname", "Incident date", "Last updated", "Age", "Phone", "Due date", "Contacts", "Captured"]}
                    api={<RelationsApi />}
                />
            </div>
        )
    }
}
export { Relations }

