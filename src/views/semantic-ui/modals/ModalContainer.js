import React, { PropTypes } from "react";

import $ from "jquery";

try {
  $.fn.modal = require("semantic-ui-modal");
  $.fn.dimmer = require("semantic-ui-dimmer");
  $.fn.transition = require("semantic-ui-transition");
} catch(e) {
  console.log(e);
}

export default class ModalContainer extends React.Component {

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    const onHidden = () => {
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

  render () {
    if (this.props.form) {
      return (
        <form ref="modal" {...this.props} />
      );
    }
    return (
      <div ref="modal" {...this.props} />
    );
  }
}
