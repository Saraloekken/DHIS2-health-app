import React, { Component } from "react";
import { DataTable } from "../components/EntityDataTable.jsx";
import { ContactsApi, IndexCasesApi, RelationsApi } from "../data/Api";

class Relations extends React.Component {
  render() {
    return (
      <div>
        <h2>Index Case and contacts</h2>
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
            "Contacts",
            "Captured",
          ]}
          api={<RelationsApi />}
        />
      </div>
    );
  }
}
export { Relations };
