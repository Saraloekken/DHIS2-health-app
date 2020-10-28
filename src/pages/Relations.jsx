import React, { useState } from 'react';
import { WelcomeBox } from "../components/WelcomeBox.jsx"; // skulle endres?
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from '../components/Filters.jsx';
import { RelationsApi } from '../data/Api';

const Relations  = () => {
    const [days, setDays] = useState(0);

        return (
            <div>
                <h2>Relations</h2>
                <Filters setDays={setDays}/>
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
                    api={<RelationsApi days={days}/>}
                />
            </div>
        )
    }
export { Relations }
