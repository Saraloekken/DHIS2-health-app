import React, { Component } from 'react'
import { Chip } from '@dhis2/ui'
import styles from "./nav.css";


class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
 
        return (
        
            <div className="navigation">
            
            <Chip dataTest="dhis2-uicore-chip" onClick={function onClick(){var _window;return(_window=window).onClick.apply(_window,arguments)}} selected>Index Cases</Chip>

            <Chip dataTest="dhis2-uicore-chip" onClick={function onClick(){var _window;return(_window=window).onClick.apply(_window,arguments)}}>Contacts</Chip>

            <Chip dataTest="dhis2-uicore-chip" onClick={function onClick(){var _window;return(_window=window).onClick.apply(_window,arguments)}}>Tracker</Chip>
       

            </div>
        )   
    }
}
export { Nav }

