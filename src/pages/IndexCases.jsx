import React, { useState } from 'react';
import { WelcomeBox } from "../components/WelcomeBox.jsx";
import styles from "../App.module.css";
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from "../components/Filters.jsx";
import { IndexCasesApi } from '../data/Api';

const IndexCases = () => {
    const [days, setDays] = useState(0);

    return (
        <div className={styles.container}>
            <h2>Index cases</h2>
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
                            "Captured",
                        ]}
                        api={<IndexCasesApi days={days} />}
                    />
                </div>
            </div>
        </div>
    )
}


export { IndexCases }
