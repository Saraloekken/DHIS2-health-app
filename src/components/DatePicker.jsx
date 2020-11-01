import React from 'react';
import styles from "../App.module.css";

const DatePicker = (props) => {
    const formatDate = (date) =>        
    `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,0)}-${date.getDate().toString().padStart(2, 0)}`
    
    return (
        <div className={styles.datepicker + ' ' + (props.disabled ? styles.disabled : styles.enabled)}> {/*Ternary-operator, er dette sant? hvis ja, gi meg denne, hvis nei, gi meg denne. */}
            <label className={styles.datelabel}>{props.label}</label>
            <input 
            type="date" 
            className={styles.dateinput} 
            disabled={props.disabled}
            value={formatDate(props.date)} 
            onChange={(e) => props.setDate(new Date(e.target.value))}
            min={props.min}
            />
        </div>
    )
};

export { DatePicker };
