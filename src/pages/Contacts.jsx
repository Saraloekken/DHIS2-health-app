import React, { Component } from 'react';
import { ContactsApi } from '../data/Api';



class Contacts extends React.Component {
    render(){

        return (
        
            <>
            <h2>Contacts</h2>
            <ContactsApi/>
            </>
        
        
        )   
    }
}
export { Contacts }


