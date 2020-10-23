import React, { Component } from 'react';
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import styles from "../App.module.css";


const DatePicker = (props) =>  {
    return (
        <div className={styles.datepicker}>
            <label for="birthday" className={styles.datelabel}>{props.label}</label>
            <input type="date" className={styles.dateinput}></input>
        </div>
    )
    
};

export { DatePicker }
