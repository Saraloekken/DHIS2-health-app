import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import { Menu, MenuItem } from '@dhis2/ui'

const query = {
    trackedEntityInstances: {
        resource: 'trackedEntityInstances',
            params: {
                ou: 'EwEP9IhOwuw', 
                paging: false,
                fields: ['trackedEntityInstance', 'attributes']
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
                        
                    <div className="white"></div>
                    
                        <Menu>
                            {data.trackedEntityInstances.trackedEntityInstances.map(({ trackedEntityInstance, attributes }) => (
                                <MenuItem key={trackedEntityInstance} label={trackedEntityInstance} />
                            ))}
                        </Menu>                    
                    
                    
                    </>
                )
            }}
        </DataQuery>
    </div>
)

export default MyApp
