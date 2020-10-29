import React, { useState } from "react";
import { WelcomeBox } from "../components/WelcomeBox.jsx";
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from "../components/Filters.jsx";
import { IndexCasesApi } from "../data/Api";
import styles from "../App.module.css";

const IndexCases = () => {
  const [days, setDays] = useState(0);

  return (
    <div className={styles.container}>
      <h2>Overview of Index Cases</h2>
      <div>
        <div className={styles.right}>
          <div className={styles.topbar}>
            <Filters setDays={setDays} />
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
              "Tracker Capture",
            ]}
            api={<IndexCasesApi days={days} />}
          />
        </div>
      </div>
    </div>
  );
};

export { IndexCases };
