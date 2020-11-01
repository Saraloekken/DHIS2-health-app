import React, { useState } from "react";
import { DataTable } from "../components/EntityDataTable.jsx";
import { RelationsApi } from "../data/Api";

const ModalContacts = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

export { ModalContacts };
