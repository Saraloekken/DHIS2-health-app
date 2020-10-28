import React, { Component, useState } from 'react';
import { SingleSelectField, SingleSelectOption, Button } from '@dhis2/ui';
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

                <Button
                dataTest="dhis2-uicore-button"
                name="Secondary button"
                onClick={function logger(_ref){let name=_ref.name,value=_ref.value;return console.info("".concat(name,": ").concat(value))}}
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
