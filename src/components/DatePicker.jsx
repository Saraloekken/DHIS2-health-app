import React, { Component } from 'react';
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import styles from "../App.module.css";


const DatePicker = (props) =>  {
    return (
        <div className={styles.datepicker+' '+(props.disabled?styles.disabled:styles.enabled)}> {/*Ternary-operator, er dette sant? hvis ja, gi meg denne, hvis nei, gi meg denne. */}
            <label for="birthday" className={styles.datelabel}>{props.label}</label>
            <input type="date" className={styles.dateinput} disabled={props.disabled}></input>
        </div>
    )
    
};

export { DatePicker }


