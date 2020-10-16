import React, { Component } from 'react';
import { ContactsApi, IndexCasesApi } from '../data/Api';

class Relations extends React.Component {
    render(){
        return (
            <>
            <h2>Relations</h2>
            <IndexCasesApi/>
            <ContactsApi/>
            </>
        )   
    }
}
export { Relations }

