import React, { Component } from 'react';
import { WelcomeBox } from "../components/WelcomeBox.jsx";
import styles from '../App.module.css';
import { IndexCasesTable } from "../components/EntityDataTable.jsx";
import { Filters } from '../components/Filters.jsx';


class IndexCases extends React.Component {

    render(){
        return ( 
            <div className={styles.container}>
                <h2>Index cases</h2>
                <div className={styles.grid}>
                    <div className={styles.left}>
                        <WelcomeBox />
                    </div>
                    
                    <div className={styles.right}>
                        <Filters />
                        <IndexCasesTable />
                    </div>
                </div>
            </div>
        )   
    }
}

export { IndexCases }
