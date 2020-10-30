import React, { useState } from 'react';
import { WelcomeBox } from "../components/WelcomeBox.jsx"; // skulle endres?
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from '../components/Filters.jsx';
import { ContactsApi } from '../data/Api';
import getDaysForwardDate from "../components/Filters.jsx";

const Contacts  = () => {
  const [from, setFrom] = useState(getDaysForwardDate(0));
  const [to, setTo] = useState(getDaysForwardDate(0));
        
    return ( 
            <div>
                <h2>Contacts</h2>
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
                        "Captured",
                      ]}
                    api={<ContactsApi from={from} to={to}/>}
                />
            </div>
     )
}

export { Contacts };
