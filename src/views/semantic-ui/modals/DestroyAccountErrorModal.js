import React from "react";
import { hideDestroyAccountErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class DestroyAccountErrorModal extends React.Component {
  render () {
    return (
      <Modal
        containerClass="destroy-account-error-modal"
        closeAction={hideDestroyAccountErrorModal}
        title="Error"
        errorAddr={["destroyAccount", "errors"]} />
    );
  }
}

export default DestroyAccountErrorModal;
