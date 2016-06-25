import React from "react";
import { hidePasswordResetRequestErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class RequestPasswordResetErrorModal extends React.Component {
  render () {
    return (
      <Modal
        containerClass="request-password-reset-error-modal"
        closeAction={hidePasswordResetRequestErrorModal}
        title="Error"
        errorAddr={["requestPasswordReset", "errors"]} />
    );
  }
}

export default RequestPasswordResetErrorModal;
