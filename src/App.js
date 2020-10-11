import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import { Menu, MenuItem, MenuSectionHeader} from '@dhis2/ui'
import styles from "./App.module.css";

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
                    <MenuSectionHeader label={i18n.t("Index Cases")} />
                    <Menu>
                    <div className="white"></div>
                            {data.trackedEntityInstances.trackedEntityInstances.map(({ trackedEntityInstance, attributes, created}) => (
                                <MenuItem 
                                key={trackedEntityInstance} 
                                label={attributes[1].value + "\n" + attributes[0].value + "\n" + created} 
                                />
                            ))}             
                    </Menu>
                    </>
                );
            }}
        </DataQuery>
    </div>
)

export default MyApp;