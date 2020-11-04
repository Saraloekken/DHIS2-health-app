import React, { useState } from "react";
import { WelcomeBox } from "../components/WelcomeBox.jsx";
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from "../components/Filters.jsx";
import { RelationsApi } from "../data/RelationsApi";
import styles from "../App.module.css";
import getDaysForwardDate from "../components/Filters.jsx";

const Relations = () => {
  const [from, setFrom] = useState(getDaysForwardDate(0));
  const [to, setTo] = useState(getDaysForwardDate(0));
  const [taskCount, setTaskCount] = useState(0);
  const [dayDescription, setDayDescription] = useState("today");

  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <h2 className={styles.headline}>Index Cases and Cases</h2>
        <Filters
          setFrom={setFrom}
          setTo={setTo}
          setDayDescription={setDayDescription}
        />
        <WelcomeBox
          taskCount={taskCount}
          dayDescription={dayDescription} />
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
            "Contacts",
            "Tracker Capture",
          ]}
          api={<RelationsApi from={from} to={to} setTaskCount={setTaskCount} />}
        />
      </div>
    </div>
  );
};

export { Relations };
