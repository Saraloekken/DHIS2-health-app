import React, { useState } from 'react';
import { WelcomeBox } from "../components/WelcomeBox.jsx";
import styles from "../App.module.css";
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from "../components/Filters.jsx";
import { IndexCasesApi } from '../data/Api';
import getDaysForwardDate from "../components/Filters.jsx";

const IndexCases = () => {
    const [from, setFrom] = useState(getDaysForwardDate(0));
    const [to, setTo] = useState(getDaysForwardDate(0));

    return (
        <div className={styles.container}>
            <h2>Index cases</h2>
            <div>
                <div className={styles.right}>
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
                            "Captured",
                        ]}
                        api={<IndexCasesApi from={from} to={to} />}
                    />
                </div>
            </div>
        </div>
    )
}


export { IndexCases }
