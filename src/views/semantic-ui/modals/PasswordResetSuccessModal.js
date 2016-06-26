import React, { PropTypes } from "react";
import ButtonLoader from "../ButtonLoader";
import Input from "../Input";
import Modal from "./Modal";
import { connect } from "react-redux";
import { hidePasswordResetSuccessModal } from "../../../actions/ui";
import {
  updatePasswordModal,
  updatePasswordModalFormUpdate
} from "../../../actions/update-password-modal";

import ModalContainer from "./ModalContainer";

class PasswordResetSuccessModal extends Modal {

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  handleInput (key, val) {
    this.props.dispatch(updatePasswordModalFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit (e) {
    e.preventDefault();
    let formData = this.props.auth.getIn(["updatePasswordModal", this.getEndpoint(), "form"]).toJS();
    this.props.dispatch(updatePasswordModal(formData, this.getEndpoint()));
  }

  render () {
    let loading = this.props.auth.getIn(["updatePasswordModal", this.getEndpoint(), "loading"]),
        endpoint = this.getEndpoint();

    return (
      <ModalContainer
        closeAction={this.props.closeAction}
        dispatch={this.props.dispatch}
        form
        onSubmit={this.handleSubmit.bind(this)}
        className="ui modal redux-auth-modal password-reset-success-modal"
      >
        <div className="header">Reset Your Password</div>
        <div className="content ui form">

          <Input
            type="password"
            label="Password"
            placeholder="Password"
            disabled={loading}
            className="password-reset-success-modal-password"
            value={this.props.auth.getIn(["updatePasswordModal", endpoint, "form", "password"])}
            errors={this.props.auth.getIn(["updatePasswordModal", endpoint, "errors", "password"])}
            onChange={this.handleInput.bind(this, "password")}
          />

          <Input
            type="password"
            label="Password Confirmation"
            placeholder="Password Confirmation"
            disabled={loading}
            className="password-reset-success-modal-password-confirmation"
            value={this.props.auth.getIn(["updatePasswordModal", endpoint, "form", "password_confirmation"])}
            errors={this.props.auth.getIn(["updatePasswordModal", endpoint, "errors", "password_confirmation"])}
            onChange={this.handleInput.bind(this, "password_confirmation")}
          />

        </div>
        <div className="actions">
          <div
            className="ui cancel button password-reset-success-modal-close"
            onClick={this.close}
            style={{float: "left"}}
          >
            Cancel
          </div>

          <ButtonLoader
            loading={loading}
            type="submit"
            className="password-reset-success-modal-submit"
            icon='lock'
            color='green'
            type="submit"
            onClick={this.handleSubmit.bind(this)}
          >
            Submit
          </ButtonLoader>

        </div>
      </ModalContainer>
    );
  }
}

export default connect(({auth}) => ({auth}))(PasswordResetSuccessModal);
