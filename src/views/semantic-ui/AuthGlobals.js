import React, { PropTypes } from "react";
import EmailSignInSuccessModal from "./modals/EmailSignInSuccessModal";
import EmailSignInErrorModal from "./modals/EmailSignInErrorModal";
import OAuthSignInSuccessModal from "./modals/OAuthSignInSuccessModal";
import OAuthSignInErrorModal from "./modals/OAuthSignInErrorModal";
import EmailSignUpSuccessModal from "./modals/EmailSignUpSuccessModal";
import EmailSignUpErrorModal from "./modals/EmailSignUpErrorModal";
import SignOutSuccessModal from "./modals/SignOutSuccessModal";
import SignOutErrorModal from "./modals/SignOutErrorModal";
import FirstTimeLoginSuccessModal from "./modals/FirstTimeLoginSuccessModal";
import FirstTimeLoginErrorModal from "./modals/FirstTimeLoginErrorModal";
import RequestPasswordResetErrorModal from "./modals/RequestPasswordResetErrorModal";
import RequestPasswordResetSuccessModal from "./modals/RequestPasswordResetSuccessModal";
import UpdatePasswordErrorModal from "./modals/UpdatePasswordErrorModal";
import UpdatePasswordSuccessModal from "./modals/UpdatePasswordSuccessModal";
import DestroyAccountErrorModal from "./modals/DestroyAccountErrorModal";
import DestroyAccountSuccessModal from "./modals/DestroyAccountSuccessModal";
import PasswordResetSuccessModal from "./modals/PasswordResetSuccessModal";
import TokenBridge from "../TokenBridge";
import { connect } from "react-redux";

class AuthGlobals extends React.Component {
  static propTypes = {
    signOutSuccessEnabled: PropTypes.bool,
    signOutErrorEnabled: PropTypes.bool,
    emailSignInSuccessEnabled: PropTypes.bool,
    emailSignInErrorEnabled: PropTypes.bool,
    oAuthSignInSuccessEnabled: PropTypes.bool,
    oAuthSignInErrorEnabled: PropTypes.bool,
    emailSignUpSuccessEnabled: PropTypes.bool,
    emailSignUpErrorEnabled: PropTypes.bool,
    firstTimeLoginSuccessEnabled: PropTypes.bool,
    firstTimeLoginErrorEnabled: PropTypes.bool,
    requestPasswordResetErrorEnabled: PropTypes.bool,
    requestPasswordResetSuccessEnabled: PropTypes.bool,
    updatePasswordErrorEnabled: PropTypes.bool,
    updatePasswordSuccessEnabled: PropTypes.bool,
    destroyAccountErrorEnabled: PropTypes.bool,
    destroyAccountSuccessEnabled: PropTypes.bool,
    passwordResetSuccessEnabled: PropTypes.bool,
    passwordResetErrorEnabled: PropTypes.bool
  };

  static defaultProps = {
    signOutSuccessEnabled: true,
    signOutErrorEnabled: true,
    emailSignInSuccessEnabled: true,
    emailSignInErrorEnabled: true,
    oAuthSignInSuccessEnabled: true,
    oAuthSignInErrorEnabled: true,
    emailSignUpSuccessEnabled: true,
    emailSignUpErrorEnabled: true,
    firstTimeLoginSuccessEnabled: true,
    firstTimeLoginErrorEnabled: true,
    requestPasswordResetErrorEnabled: true,
    requestPasswordResetSuccessEnabled: true,
    updatePasswordErrorEnabled: true,
    updatePasswordSuccessEnabled: true,
    destroyAccountErrorEnabled: true,
    destroyAccountSuccessEnabled: true,
    passwordResetSuccessEnabled: true,
    passwordResetErrorEnabled: true
  };

  render () {
    let showEmailSignInSuccess = (
      this.props.emailSignInSuccessEnabled &&
      this.props.auth.getIn(["ui", "emailSignInSuccessModalVisible"])
    );

    let showEmailSignInError = (
      this.props.emailSignInErrorEnabled &&
      this.props.auth.getIn(["ui", "emailSignInErrorModalVisible"])
    );

    let showEmailSignUpSuccess = (
      this.props.emailSignUpSuccessEnabled &&
      this.props.auth.getIn(["ui", "emailSignUpSuccessModalVisible"])
    );

    let showEmailSignUpError = (
      this.props.emailSignUpErrorEnabled &&
      this.props.auth.getIn(["ui", "emailSignUpErrorModalVisible"])
    );

    let showSignOutSuccess = (
      this.props.signOutSuccessEnabled &&
      this.props.auth.getIn(["ui", "signOutSuccessModalVisible"])
    );

    let showSignOutError = (
      this.props.signOutErrorEnabled &&
      this.props.auth.getIn(["ui", "signOutErrorModalVisible"])
    );

    let showFirstTimeLoginSuccess = (
      this.props.firstTimeLoginSuccessEnabled &&
      this.props.auth.getIn(["ui", "firstTimeLoginSuccessModalVisible"])
    );

    let showFirstTimeLoginError = (
      this.props.firstTimeLoginErrorEnabled &&
      this.props.auth.getIn(["ui", "firstTimeLoginErrorModalVisible"])
    );

    let showRequestPasswordResetError = (
      this.props.requestPasswordResetErrorEnabled &&
      this.props.auth.getIn(["ui", "requestPasswordResetErrorModalVisible"])
    );

    let showRequestPasswordResetSuccess = (
      this.props.requestPasswordResetSuccessEnabled &&
      this.props.auth.getIn(["ui", "requestPasswordResetSuccessModalVisible"])
    );

    let showOAuthSignInSuccess = (
      this.props.oAuthSignInSuccessEnabled &&
      this.props.auth.getIn(["ui", "oAuthSignInSuccessModalVisible"])
    );

    let showOAuthSignInError = (
      this.props.oAuthSignInErrorEnabled &&
      this.props.auth.getIn(["ui", "oAuthSignInErrorModalVisible"])
    );

    let updatePasswordSuccess = (
      this.props.updatePasswordSuccessEnabled &&
      this.props.auth.getIn(["ui", "updatePasswordSuccessModalVisible"])
    );

    let updatePasswordError = (
      this.props.updatePasswordErrorEnabled &&
      this.props.auth.getIn(["ui", "updatePasswordErrorModalVisible"])
    );

    let destroyAccountSuccess = (
      this.props.destroyAccountSuccessEnabled &&
      this.props.auth.getIn(["ui", "destroyAccountSuccessModalVisible"])
    );

    let destroyAccountError = (
      this.props.destroyAccountErrorEnabled &&
      this.props.auth.getIn(["ui", "destroyAccountErrorModalVisible"])
    );

    let passwordResetSuccess = (
      this.props.passwordResetSuccessEnabled &&
      this.props.auth.getIn(["ui", "passwordResetSuccessModalVisible"])
    );

    //let passwordResetError = (
    //this.props.passwordResetErrorEnabled &&
    //this.props.auth.getIn(["ui", "passwordResetErrorModalVisible"])
    //);

    return (
      <div id="auth-modals">
        {showEmailSignInSuccess && <EmailSignInSuccessModal />}
        {showEmailSignInError && <EmailSignInErrorModal />}
        {showOAuthSignInSuccess && <OAuthSignInSuccessModal />}
        {showOAuthSignInError && <OAuthSignInErrorModal />}
        {showEmailSignUpSuccess && <EmailSignUpSuccessModal />}
        {showEmailSignUpError && <EmailSignUpErrorModal />}
        {showSignOutSuccess && <SignOutSuccessModal />}
        {showSignOutError && <SignOutErrorModal />}
        {showFirstTimeLoginSuccess && <FirstTimeLoginSuccessModal />}
        {showFirstTimeLoginError && <FirstTimeLoginErrorModal />}
        {showRequestPasswordResetError && <RequestPasswordResetErrorModal />}
        {showRequestPasswordResetSuccess && <RequestPasswordResetSuccessModal />}
        {updatePasswordError && <UpdatePasswordErrorModal />}
        {updatePasswordSuccess && <UpdatePasswordSuccessModal />}
        {destroyAccountError && <DestroyAccountErrorModal />}
        {destroyAccountSuccess && <DestroyAccountSuccessModal />}
        {passwordResetSuccess && <PasswordResetSuccessModal />}
        <TokenBridge />
      </div>
    );
  }
}

export default connect(({auth}) => ({auth}))(AuthGlobals);
