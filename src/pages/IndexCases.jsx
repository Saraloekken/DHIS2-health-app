import React, { useState } from "react";
import { WelcomeBox } from "../components/WelcomeBox.jsx";
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from "../components/Filters.jsx";
import getDaysForwardDate from "../components/Filters.jsx";
import { IndexCasesApi } from "../data/IndexCasesApi";
import styles from "../App.module.css";

const IndexCases = () => {
  const [from, setFrom] = useState(getDaysForwardDate(0));
  const [to, setTo] = useState(getDaysForwardDate(0));
  const [taskCount, setTaskCount] = useState(0);
  const [dayDescription, setDayDescription] = useState('today');

  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <div className={styles.left}>
          <h2>Overview of Index Cases</h2>
          <Filters setFrom={setFrom} setTo={setTo} setDayDescription={setDayDescription} />
        </div>
        <WelcomeBox taskCount={taskCount} dayDescription={dayDescription} />
      </div>
      <div>
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
          api={<IndexCasesApi from={from} to={to} setTaskCount={setTaskCount} />}
        />
      </div>
    </div>
  );
};

export { IndexCases };
