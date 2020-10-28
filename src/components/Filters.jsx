import React, { useState } from 'react';
import { SingleSelectField, SingleSelectOption, Button } from '@dhis2/ui';
import styles from "../App.module.css";
import { DatePicker } from "../components/DatePicker.jsx";

const Filters = (props) => { 

    const [enabled, setEnabled] = useState(false)
    const [interval, setInterval] = useState('1')

    function updateTable() {
        if (interval==1) {
            props.setDays(0)
        }
        if (interval==2) {
            props.setDays(1)
        }
        if (interval==3) {
            props.setDays(7)
        }
        if (interval==4) {
            props.setDays(30)
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
                
                
                <DatePicker label="From" disabled={enabled==false}/> 
                <DatePicker label="To" disabled={enabled==false}/>

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


export { Filters }
