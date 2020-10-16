import React, { useState}from 'react';
import { DataQuery } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Chip} from '@dhis2/ui';
import styles from "./App.module.css";
import { IndexCases } from "./pages/IndexCases.js";
import { Contacts } from "./pages/Contacts.js";
import { Tracker } from "./pages/Tracker.js";




const MyApp = () => {

const [page, setPage] = useState(<IndexCases/>)
    
function indexcases(){
    setPage(<IndexCases />)
    }

function contacts(){
    setPage(<Contacts />)
}

function tracker(){
    setPage(<Tracker />)
}



        
    return (
        
        <div className={styles.container}>
          
             
             
            <div className={styles.navigation}>
            
            <Chip dataTest="dhis2-uicore-chip" onClick={indexcases} selected>Index Cases</Chip>

            <Chip dataTest="dhis2-uicore-chip" onClick={contacts}>Contacts</Chip>

            <Chip dataTest="dhis2-uicore-chip" onClick={tracker}>Tracker</Chip>


       

            </div>
             
            

            <main className={styles.main}>
                
            
    
            {page}
            

            </main>

        </div>
    )
}

export default MyApp
