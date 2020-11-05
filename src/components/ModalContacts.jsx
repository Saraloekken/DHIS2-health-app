import React, { useState } from "react";

{ /*Heavily influenced by https://wecodetheweb.com/2019/03/02/easy-modals-with-react-hooks/?fbclid=IwAR3dwfDbrgKnn0txxq1cBlsl24WvsfB_Y0S395A_MylHJaQ5FSl7SEYDoE4*/ }
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
