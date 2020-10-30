import React, { useState } from "react";
import { WelcomeBox } from "../components/WelcomeBox.jsx";
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from "../components/Filters.jsx";
import { RelationsApi } from "../data/Api";
import styles from "../App.module.css";
import getDaysForwardDate from "../components/Filters.jsx";

const Relations = () => {
    const [from, setFrom] = useState(getDaysForwardDate(0));
    const [to, setTo] = useState(getDaysForwardDate(0));

  return (
    <div className={StyleSheet.container}>
      <h2>Index Cases and Contacts</h2>
      <div>
        <div className={styles.topbar}>
          <Filters setFrom={setFrom} setTo={setTo}/>
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
         api={<RelationsApi from={from} to={to}/>}
        />
      </div>
    </div>
  );
};
export { Relations };
