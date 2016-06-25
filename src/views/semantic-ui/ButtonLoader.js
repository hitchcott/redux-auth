import React, { PropTypes } from "react";

class ButtonLoader extends React.Component {
  static propTypes = {
    icon: PropTypes.func,
    loading: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object
  };

  handleClick (ev) {
    ev.preventDefault();
    this.props.onClick(ev);
  }

  getColor () {
    if (this.props.disabled) {
      return this.props.spinColorDisabled;
    } else if (this.props.primary || this.props.secondary) {
      return this.props.spinColorLight;
    } else {
      return this.props.spinColorDark;
    }
  }

  renderIcon () {
    if (!this.props.icon && !this.props.loading) { return null; }
    return (
      <i className={`icon ${this.props.loading ? "notched circle loading" : this.props.icon}`} />
    );
  }

  render () {
    return (
      <div
        className="ui button"
        onClick={this.handleClick.bind(this)}
        disabled={this.props.disabled || this.props.loading}
      >
        {this.renderIcon()}
        {this.props.children}
      </div>
    );
  }
}

export default ButtonLoader;
