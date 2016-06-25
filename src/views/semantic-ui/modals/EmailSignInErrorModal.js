import React from "react";
import { hideEmailSignInErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class EmailSignInErrorModal extends React.Component {
  render () {
    console.log('hmmm', hideEmailSignInErrorModal)
    return (
      <Modal
        containerClass="email-sign-in-error-modal"
        closeAction={hideEmailSignInErrorModal}
        title="Sign In Error"
        errorAddr={["emailSignIn", "errors"]} />
    );
  }
}

export default EmailSignInErrorModal;
