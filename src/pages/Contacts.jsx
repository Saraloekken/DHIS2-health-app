
import React, { useState } from 'react';
import { WelcomeBox } from "../components/WelcomeBox.jsx"; // skulle endres?
import { DataTable } from "../components/EntityDataTable.jsx";
import { Filters } from '../components/Filters.jsx';
import { ContactsApi } from '../data/Api';

const Contacts  = () => {
    const [days, setDays] = useState(0);
        
    return ( 
            <div>
                <h2>Contacts</h2>
                <Filters setDays={setDays}/>
                <DataTable api={<ContactsApi days={days}/>} />
            </div>
        )   
    }


export { Contacts }
