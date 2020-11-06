import React from "react";
import { ModalContacts } from "../components/ModalContacts.jsx";
import { DataTable } from "../components/EntityDataTable.jsx";
import { ContactsApi } from "../data/ContactsApi.js";
import styles from "../App.module.css";
import {
  Button,
  ButtonStrip,
  Modal,
  ModalTitle,
  ModalContent,
  ModalActions,
} from "@dhis2/ui";
import { findValueAttributes } from "../data/ApiFunctions.js";

const ModalApi = (props) => {
  return (
    <ModalContacts
      toggle={(show) => <Button onClick={show}> View contacts </Button>}
      content={(hide) => (
        <Modal
          className={styles.modaltable}
          large
          dataTest="dhis2-uicore-modal"
          position="middle"
        >
          <div className={styles.modalheader}>
            <ModalTitle dataTest="dhis2-uicore-modaltitle">
              {`Overview of ${findValueAttributes(
                props.attributes,
                "first_name"
              )} ${findValueAttributes(
                props.attributes,
                "surname"
              )}'s contacts`}
            </ModalTitle>
            <div
              className={styles.notification}
            >{`${props.relationships.length}`}</div>
          </div>
          <ModalContent dataTest="dhis2-uicore-modalcontent">
            <DataTable
              headlines={[
                "First name",
                "Surname",
                "Incident date",
                "Last updated",
                "Age",
                "Phone",
                "Status",
                "Due date",
                "Tracker Capture",
              ]}
              api={
                <ContactsApi
                  from={props.from}
                  to={props.to}
                  tei={props.tei}
                  relationsObject={props.relationsObject}
                  setTaskCount={props.setTaskCount}
                />
              }
            />
          </ModalContent>
          <ModalActions>
            <ButtonStrip>
              <Button onClick={hide}>Close</Button>
            </ButtonStrip>
          </ModalActions>
        </Modal>
      )}
    />
  );
};

export { ModalApi };
