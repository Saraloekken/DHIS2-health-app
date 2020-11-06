import React, { useState } from "react";

const ModalContacts = ({ toggle, content }) => {
  const [isShown, modalIsShown] = useState(false);
  const hide = () => modalIsShown(false);
  const show = () => modalIsShown(true);

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

export { ModalContacts };
