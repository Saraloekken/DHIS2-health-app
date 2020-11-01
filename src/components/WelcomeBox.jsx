import React, { Component } from "react";
import { NoticeBox } from "@dhis2/ui";
import styles from "../App.module.css";

class WelcomeBox extends Component {
  render() {
    return (
      <NoticeBox
        className={styles.notice}
        dataTest="dhis2-uicore-noticebox"
        title="Welcome, Hanna!"
      >
        You have <strong>{this.props.taskCount}</strong> tasks left to complete {this.props.dayDescription}!
        {/* //tomorrow //next week //next month //during the periode chosen */}

      </NoticeBox>
    );
  }
}

export { WelcomeBox };
