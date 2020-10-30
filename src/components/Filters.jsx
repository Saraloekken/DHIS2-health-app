import React, { useState } from 'react';
import { SingleSelectField, SingleSelectOption, Button } from '@dhis2/ui';
import styles from "../App.module.css";
import { DatePicker } from "../components/DatePicker.jsx";

export function getDaysForwardDate(days) {
    const today = new Date();
    const daysForward = new Date(today);
    daysForward.setDate(daysForward.getDate() + days);
    let dd = String(daysForward.getDate()).padStart(2, "0");
    let mm = String(daysForward.getMonth() + 1).padStart(2, "0");
    let yyyy = daysForward.getFullYear();
  
    return yyyy + "-" + mm + "-" + dd;
  }

const Filters = (props) => { 

    const [enabled, setEnabled] = useState(false)
    const [interval, setInterval] = useState('1')
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    
    const formatDate = (date) =>        
    `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,0)}-${date.getDate().toString().padStart(2, 0)}`

    function updateTable() {
        if (interval==1) {
            props.setFrom(getDaysForwardDate(0))
            props.setTo(getDaysForwardDate(0))
        }
        if (interval==2) {
            props.setFrom(getDaysForwardDate(0))
            props.setTo(getDaysForwardDate(1))
        }
        if (interval==3) {
            props.setFrom(getDaysForwardDate(0))
            props.setTo(getDaysForwardDate(7))
        }
        if (interval==4) {
            props.setFrom(getDaysForwardDate(0))
            props.setTo(getDaysForwardDate(30))
        }
        if (interval==5) {     
            props.setFrom(formatDate(fromDate));
            props.setTo(formatDate(toDate));
        }
    }

        function intervalChange (select){
            setInterval(select.selected)
            
            if(select.selected==5){
                setEnabled(true)    
            } else {
                setEnabled(false)
            }
        }

        return (

            <div className={styles.filters}>

                <SingleSelectField inputWidth="200px" label="Time interval" selected={interval} onChange={intervalChange}>
                    <SingleSelectOption
                        label="Today"
                        value="1"
                    />
                    <SingleSelectOption
                        label="Tomorrow"
                        value="2"
                    />
                    <SingleSelectOption
                        label="Week"
                        value="3"
                    />
                    <SingleSelectOption
                        label="Month"
                        value="4"
                    />

                    <SingleSelectOption
                        label="Custom"
                        value="5"
                    />
                    
                </SingleSelectField>

                <DatePicker label="From" disabled={enabled==false} date={fromDate} setDate={setFromDate} />
                <DatePicker label="To" disabled={enabled==false} date={toDate} setDate={setToDate} />
                
                <Button
                dataTest="dhis2-uicore-button"
                name="Secondary button"
                onClick={() => updateTable()}
                secondary
                type="button"
                value="default"
                >
                    Search
                </Button>  
            </div>
        )
    }

export default getDaysForwardDate;
export { Filters }
