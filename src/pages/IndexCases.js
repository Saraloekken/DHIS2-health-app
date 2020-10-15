import React, { Component } from 'react'
import { IndexCasesApi } from "../data/Api.js";

class IndexCases extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return ( 
            <>
            <h2>Index Cases</h2>
            <IndexCasesApi/>
            </>
        )   
    }
}
export { IndexCases }


