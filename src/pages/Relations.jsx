import React, { useState } from "react";
import { WelcomeBox } from "../components/WelcomeBox.jsx";
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from "../components/Filters.jsx";
import { RelationsApi } from "../data/Api";
import styles from "../App.module.css";

const Relations = () => {
  const [days, setDays] = useState(0);

  return (
    <div className={StyleSheet.container}>
      <h2>Index Cases and Contacts</h2>
      <div>
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
            "Contacts",
            "Tracker Capture",
          ]}
          api={<RelationsApi days={days} />}
        />
      </div>
    </div>
  );
};
export { Relations };
