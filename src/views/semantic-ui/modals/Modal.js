import React, { PropTypes } from "react";
import ErrorList from "../ErrorList";
import { connect } from "react-redux";

import $ from "jquery";

try {
  $.fn.modal = require("semantic-ui-modal");
  $.fn.dimmer = require("semantic-ui-dimmer");
  $.fn.transition = require("semantic-ui-transition");
} catch(e) {
  console.log(e);
}

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

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    const onHidden = () => {
      console.log(this.props)
      this.props.dispatch(this.props.closeAction());
    }
    this.$modal = $(this.refs.modal);
    this.$modal.modal({
      detachable: false,
      autofocus: false,
      onHidden
    }).modal("show");
  }

  close() {
    this.$modal.modal("hide");
  }

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
      <div
        ref="modal"
        className={`ui modal redux-auth-modal ${this.props.containerClass}`}
      >
        <div className="header">{this.props.title}</div>
        <div className="content">{body}</div>
        <div className="actions">
          <div
            className={`ui button ${this.props.containerClass}-close`}
            onClick={this.close}
          >
            {this.props.closeBtnLabel}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({auth}) => ({auth}))(BaseModal);
