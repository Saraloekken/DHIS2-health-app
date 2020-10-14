import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import { Menu, MenuItem, MenuSectionHeader} from '@dhis2/ui'
import styles from "./App.module.css";
import { Nav } from "./components/Nav.js";

const query = {
    trackedEntityInstances: {
        resource: 'trackedEntityInstances',
            params: {
                ou: 'EwEP9IhOwuw', 
                fields: ['trackedEntityInstance', 'attributes', 'created']
            }
    },
}

const MyApp = () => (
    <div className={classes.container}>
        <DataQuery query={query}>
            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>
                return (
                    <>
                
                    <Nav/>
                    
                    
                    
                 
                    </>
                );
            }}
        </DataQuery>
    </div>
)

export default MyApp;