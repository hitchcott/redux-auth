import React, { PropTypes } from "react";
import ErrorList from "../ErrorList";
import { connect } from "react-redux";
import ModalContainer from "./ModalContainer";

class BaseModal extends React.Component {
  static propTypes = {
    errorAddr: PropTypes.array,
    closeBtnLabel: PropTypes.string,
    closeAction: PropTypes.func,
  };
  static defaultProps = {
    errorAddr: null,
    closeBtnLabel: "Ok"
  };

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  getErrorList () {
    let [base, ...rest] = this.props.errorAddr;
    return <ErrorList errors={this.props.auth.getIn([
      base, this.getEndpoint(), ...rest
    ])} />
  }

  render () {
    let body = (this.props.errorAddr)
      ? this.getErrorList()
      : this.props.children;

    return (
      <ModalContainer
        closeAction={this.props.closeAction}
        dispatch={this.props.dispatch}
        className={`ui modal redux-auth-modal ${this.props.containerClass}`}
      >
        <div className="header">{this.props.title}</div>
        <div className="content">{body}</div>
        <div className="actions">
          <div
            className={`ui cancel button ${this.props.containerClass}-close`}
          >
            {this.props.closeBtnLabel}
          </div>
        </div>
      </ModalContainer>
    );
  }
}

export default connect(({auth}) => ({auth}))(BaseModal);
