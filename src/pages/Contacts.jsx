import React, { useState } from "react";
import { WelcomeBox } from "../components/WelcomeBox.jsx";
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from "../components/Filters.jsx";
import { ContactsApi } from "../data/ContactsApi";
import styles from "../App.module.css";
import getDaysForwardDate from "../components/Filters.jsx";

const Contacts = () => {
  const [from, setFrom] = useState(getDaysForwardDate(0));
  const [to, setTo] = useState(getDaysForwardDate(0));
  const [taskCount, setTaskCount] = useState(0);
  const [dayDescription, setDayDescription] = useState('today');

  return (
    <div className={styles.container}>
      <h2>Overview of Contacts</h2>
      <div>
        <div className={styles.topbar}>
          <Filters setFrom={setFrom} setTo={setTo} setDayDescription={setDayDescription} />
          <WelcomeBox taskCount={taskCount} dayDescription={dayDescription} />
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
          api={<ContactsApi from={from} to={to} setFrom={setFrom} setTo={setTo} setTaskCount={setTaskCount} />}
        />
      </div>
    </div>
  );
};

export { Contacts };
