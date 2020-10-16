import React, { Component } from 'react';
import { ContactsApi, IndexCasesApi } from '../data/Api';

class Tracker extends React.Component {
    render(){
        return (
            <>
            <h2>Tracker</h2>
            <IndexCasesApi/>
            <ContactsApi/>
            </>
        )   
    }
}
export { Tracker }

