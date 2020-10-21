import React, { Component, useState } from 'react';
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import styles from "../App.module.css";
import { DatePicker } from "../components/DatePicker.jsx";


const Filters = () => { 

    const [enabled, setEnabled] = useState(false)
    const [interval, setInterval] = useState('1')

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
                <SingleSelectField inputWidth="200px" label="Status" selected="1">
                    <SingleSelectOption
                        label="All"
                        value="1"
                    />
                    <SingleSelectOption
                        label="Follow-up"
                        value="2"
                    />
                    <SingleSelectOption
                        label="Health status"
                        value="3"
                    />
                </SingleSelectField>

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
                        label="This week"
                        value="3"
                    />
                    <SingleSelectOption
                        label="This month"
                        value="4"
                    />

                    <SingleSelectOption
                        label="Custom"
                        value="5"
                    />
                    
                </SingleSelectField>
                
                
                <DatePicker label="From" disabled={enabled==false}/> 
                <DatePicker label="To" disabled={enabled==false}/>
                
                
            </div>

        )
    }


export { Filters }
