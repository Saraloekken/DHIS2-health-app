import React, { Component } from "react";
import { DataTable } from "../components/EntityDataTable.jsx";
import { ContactsApi, IndexCasesApi, RelationsApi } from "../data/Api";

class Contacts extends React.Component {
  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <DataTable
          headlines={[
            "First name",
            "Surname",
            "Incident date",
            "Last updated",
            "Age",
            "Phone",
            "Status",
            "Due date",
            "Captured",
          ]}
          api={<ContactsApi />}
        />
      </div>
    );
  }
}

export { Contacts };
