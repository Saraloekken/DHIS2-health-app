import React, { useState, useEffect } from "react";
import styles from "../App.module.css";
import { Chip } from "@dhis2/ui";
import { IndexCases } from "../pages/IndexCases.jsx";
import { Contacts } from "../pages/Contacts.jsx";
import { Relations } from "../pages/Relations.jsx";

function usePersistedState(key, defaultValue) {
    const [state, setState] = React.useState(
        () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

function checkActive(active) {
    if (active == "indexcases") {
        return <IndexCases />;
    }
    if (active == "contacts") {
        return <Contacts />;
    }
    if (active == "relations") {
        return <Relations />;
    }
}

const Nav = () => {

    const [active, setActive] = usePersistedState(0, "indexcases");
    const [page, setPage] = useState(checkActive(active));

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

export { Nav };
