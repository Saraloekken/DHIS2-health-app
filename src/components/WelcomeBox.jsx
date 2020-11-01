import React, { Component } from "react";
import { NoticeBox } from "@dhis2/ui";
import styles from "../App.module.css";
import { useDataQuery } from "@dhis2/app-runtime";

class WelcomeBox extends Component {


  render() {
    const query = {
      Me: {
        resource: "me",
      }
    }

    const { loading, error, data } = useDataQuery(query);

    return (

      <NoticeBox
        className={styles.notice}
        dataTest="dhis2-uicore-noticebox"
        title={`Welcome, ${data.me.me}`}
      >
        You have <strong>{this.props.taskCount}</strong> tasks left to complete {this.props.dayDescription} !
        {/* //tomorrow //next week //next month //during the periode chosen */}

      </NoticeBox >
    );
  }
}

export { WelcomeBox };
