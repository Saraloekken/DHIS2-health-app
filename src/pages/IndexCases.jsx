import React, { Component } from 'react'
import { IndexCasesApi } from "../data/Api.js";
import { WelcomeBox } from "../components/WelcomeBox.jsx";
import styles from '../App.module.css'
import { EntityDataTable} from "../components/EntityDataTable.jsx";


class IndexCases extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return ( 
            <>
            <h2>Index case tracker</h2>
            
            <div className={styles.left}>
            <WelcomeBox />
            </div>
            
            <div className={styles.right}>
            <IndexCasesApi/>
            <EntityDataTable/>
           
            </div>
            </>
        )   
    }
}
export { IndexCases }


