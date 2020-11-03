import React, { useState } from "react";
import { DataQuery } from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import { Chip } from "@dhis2/ui";
import styles from "./App.module.css";
import { IndexCases } from "./pages/IndexCases.jsx";
import { Contacts } from "./pages/Contacts.jsx";
import { Relations } from "./pages/Relations.jsx";

const MyApp = () => {
  //To statevariabler som oppdateres sammen, kunne vært slått sammen til èn som oppdatererer begge?
  //Refresher innholdet to ganger fordi den tror staten endrer seg to ganger, mens den bare endrer seg en?
  const [page, setPage] = useState(<IndexCases />);
  const [active, setActive] = useState("indexcases");

  function indexcases() {
    setPage(<IndexCases />);
    setActive("indexcases");
  }

  function contacts() {
    setPage(<Contacts />);
    setActive("contacts");
  }

  function relations() {
    setPage(<Relations />);
    setActive("relations");
  }

  // Navigation header into own comonent
  return (
    <div>
      <div className={styles.navigation}>
        <Chip
          dataTest="dhis2-uicore-chip"
          onClick={indexcases}
          selected={active == "indexcases"}
        >
          Index Cases
        </Chip>

        <Chip
          dataTest="dhis2-uicore-chip"
          onClick={contacts}
          selected={active == "contacts"}
        >
          Contacts
        </Chip>

        <Chip
          dataTest="dhis2-uicore-chip"
          onClick={relations}
          selected={active == "relations"}
        >
          Index Cases and Contacts
        </Chip>
      </div>

      <main className={styles.main}>{page}</main>
    </div>
  );
};

export default MyApp;
