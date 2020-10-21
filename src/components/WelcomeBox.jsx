import React, { Component } from 'react';
import { NoticeBox } from '@dhis2/ui';
import covidIcon from'../img/covid.png';
import styles from "../App.module.css";


class WelcomeBox extends React.Component {
    render(){

        return (   

            <NoticeBox className={styles.notice}dataTest="dhis2-uicore-noticebox" title="Welcome, Hanna!">
                You have <strong>XX</strong> tasks left to complete today!
                 <img className={styles.covidimg} src={covidIcon} alt="CovidIcon"/>
            </NoticeBox>
        
        )   
    }
}

export { WelcomeBox }
