import React, { Component } from "react";
import { WelcomeBox } from "../components/WelcomeBox.jsx";
import styles from "../App.module.css";
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from "../components/Filters.jsx";
import { ContactsApi, IndexCasesApi, RelationsApi } from "../data/Api";

class IndexCases extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>Index cases</h2>
        <div className={styles.right}>
          <div className={styles.topbar}>
            <Filters />
            <WelcomeBox />
          </div>
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
            api={<IndexCasesApi />}
          />
        </div>
      </div>
    );
  }
}

export { IndexCases };
