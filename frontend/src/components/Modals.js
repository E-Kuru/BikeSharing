import { useContext } from "react";

import { ModalContext } from "../context/Modal";
import Modal from "./Modal";
import Login from "./form/Login";
import Signup from "./form/SignUp";

const Modals = () => {
  const { type } = useContext(ModalContext);

  if (!type) {
    return null;
  }

  return (
    <Modal>
      {type === "login" && <Login />}
      {type === "signup" && <Signup />}
    </Modal>
  );
};

export default Modals;
