
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
                <DataTable api={<RelationsApi days={days}/>} />
            </div>
        )
    }
export { Relations }

