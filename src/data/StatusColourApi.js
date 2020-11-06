import React from "react";
import styles from "../App.module.css";
import { Tag } from "@dhis2/ui";
import { findOverdue, findValueEnrollments } from "../data/ApiFunctions.js";

const StatusColourApi = (props) => {
  //const isOverdue = findOverdue(props.enrollments, props.from, props.to);
  return (
    <Tag
      className={
        !props.isOverdue &&
        findValueEnrollments(
          props.enrollments,
          props.from,
          props.to,
          "status"
        ) === "ACTIVE" &&
        styles.positive
      }
      neutral={
        !props.isOverdue &&
        findValueEnrollments(
          props.enrollments,
          props.from,
          props.to,
          "status"
        ) === "SCHEDULE"
          ? true
          : false
      }
      default={
        findValueEnrollments(
          props.enrollments,
          props.from,
          props.to,
          "status"
        ) === "VISITED"
          ? true
          : false
      }
      negative={props.isOverdue}
    >
      {props.isOverdue
        ? "OVERDUE"
        : findValueEnrollments(
            props.enrollments,
            props.from,
            props.to,
            "status"
          )}
    </Tag>
  );
};

export { StatusColourApi };
