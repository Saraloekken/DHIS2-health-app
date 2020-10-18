import React, { Component } from 'react';
import { RelationsApi } from '../data/Api';

class Relations extends React.Component {
    render(){
        return (
            <>
            <h2>Relations</h2>
            <RelationsApi/>
            </>
        )   
    }
}
export { Relations }

