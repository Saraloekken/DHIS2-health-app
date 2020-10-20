import React, { Component } from 'react';
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import styles from "../App.module.css";
import { DatePicker } from "../components/DatePicker.jsx";


class Filters extends React.Component {
    render() {

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

                <SingleSelectField inputWidth="200px" label="Time interval" selected="1">
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
                        value="3"
                    />
                </SingleSelectField>
                
                <DatePicker label="From" />
                <DatePicker label="To" />
                
            </div>

        )
    }
}

export { Filters }
