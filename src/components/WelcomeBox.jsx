import React, { Component } from "react";
import { NoticeBox, CircularLoader, Card } from "@dhis2/ui";
import styles from "../App.module.css";
import { useDataQuery } from "@dhis2/app-runtime";
import HealthWorker from "../img/healthworker.png"


const WelcomeBox = (props) => {
  const query = {
    Me: {
      resource: "me",
    }
  }

  const { loading, error, data } = useDataQuery(query);

  if (error) {
    return <p>{`ERROR: ${error.message}`}</p>;
  }
  if (loading) {
    return <CircularLoader />;
  }

  return (
    <div className={styles.infobox}>
      <img src={HealthWorker} className={styles.healthimg} alt="Health worker" />
      <div className={styles.infomsg}>
        <h3>Welcome, {data.Me.name}!</h3>
        <p>You have <strong className={styles.emphasis}>{props.taskCount}</strong> tasks left to complete {props.dayDescription}.</p>
        {/* //tomorrow //next week //next month //during the periode chosen */}
        <p>Keep up the good work, and remember to take breaks once in a while.</p>
      </div>
    </div >
  );
}


export { WelcomeBox };
