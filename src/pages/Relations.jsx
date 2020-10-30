import React, { useState } from 'react';
import { WelcomeBox } from "../components/WelcomeBox.jsx"; // skulle endres?
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from '../components/Filters.jsx';
import { RelationsApi } from '../data/Api';
import getDaysForwardDate from "../components/Filters.jsx";

const Relations  = () => {
    const [from, setFrom] = useState(getDaysForwardDate(0));
    const [to, setTo] = useState(getDaysForwardDate(0));

        return (
            <div>
                <h2>Relations</h2>
                <Filters setFrom={setFrom} setTo={setTo}/>
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
                    "Captured",
                  ]}
                    api={<RelationsApi from={from} to={to}/>}
                />
            </div>
        )
    }
export { Relations }
