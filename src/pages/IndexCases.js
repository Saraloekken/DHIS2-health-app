import React, { Component } from 'react'
import { Api } from "../data/Api.js";

const query = {
    trackedEntityInstances: {
        resource: 'trackedEntityInstances',
            params: {
                ou: 'EwEP9IhOwuw', 
                fields: ['trackedEntityInstance', 'attributes', 'created']
            }
    },
}

class IndexCases extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return ( 
            <>
            <h2>Index Cases</h2>
            <Api/>
            </>
        )   
    }
}
export { IndexCases }


