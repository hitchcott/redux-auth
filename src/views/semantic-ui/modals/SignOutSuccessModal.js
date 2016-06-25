import React from "react";
import { hideSignOutSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

class SignOutSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        containerClass="sign-out-success-modal"
        title="Goodbye!"
        closeAction={hideSignOutSuccessModal}>
        <p>You have been successfully signed out.</p>
      </Modal>
    );
  }
}

export default SignOutSuccessModal;
