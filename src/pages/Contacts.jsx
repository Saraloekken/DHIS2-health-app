import React, { useState } from "react";
import { WelcomeBox } from "../components/WelcomeBox.jsx"; 
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from "../components/Filters.jsx";
import { ContactsApi } from "../data/Api";
import styles from "../App.module.css";
import getDaysForwardDate from "../components/Filters.jsx";

const Contacts = () => {
  const [from, setFrom] = useState(getDaysForwardDate(0));
  const [to, setTo] = useState(getDaysForwardDate(0));

  return (
    <div className={styles.container}>
      <h2>Overview of Contacts</h2>
      <div>
        <div className={styles.topbar}>
           <Filters setFrom={setFrom} setTo={setTo} />
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
          api={<ContactsApi from={from} to={to}/>}
        />
      </div>
    </div>
  );
};

export { Contacts };
