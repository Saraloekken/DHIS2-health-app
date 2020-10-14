import React, { useState}from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import { Menu, MenuItem, MenuSectionHeader, Chip} from '@dhis2/ui'
import styles from "./App.module.css";
import { Nav } from "./components/Nav.js";
import { IndexCases } from "./pages/IndexCases.js";
import { Contacts } from "./pages/Contacts.js";
import { Tracker } from "./pages/Tracker.js";



const MyApp = () => {

const [count, setCount] = useState(<IndexCases/>)
    
function indexcases(){
    setCount(<IndexCases />)
    }

function contacts(){
    setCount(<Contacts />)
}

function tracker(){
    setCount(<Tracker />)
}

             

        
    return (
        
        <div className={styles.container}>
          
             
             
            <div className="navigation">
            
            <Chip dataTest="dhis2-uicore-chip" onClick={indexcases}>Index Cases</Chip>

            <Chip dataTest="dhis2-uicore-chip" onClick={contacts}>Contacts</Chip>

            <Chip dataTest="dhis2-uicore-chip" onClick={tracker}>Tracker</Chip>
       

            </div>
             
            

            <main className={styles.main}>
                
            
    
            {count}
            

            </main>

        </div>
    )
}

export default MyApp
