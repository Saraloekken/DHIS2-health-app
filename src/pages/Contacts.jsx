import React, { Component } from 'react';
import { ContactsTable } from "../components/EntityDataTable.jsx";
import { WelcomeBox } from "../components/WelcomeBox.jsx";
import styles from '../App.module.css';
import { Filters } from '../components/Filters.jsx';


class Contacts extends React.Component {

    render(){
        return ( 
            <div className={styles.container}>
                <h2>Contacts</h2>
                <div className={styles.grid}>
                    <div className={styles.left}>
                        <WelcomeBox />
                    </div>
                    
                    <div className={styles.right}>
                        <Filters />
                        <ContactsTable />
                    </div>
                </div>
            </div>
        )   
    }
}

export { Contacts }
