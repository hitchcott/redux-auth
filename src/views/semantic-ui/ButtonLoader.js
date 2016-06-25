import React, { PropTypes } from "react";

class ButtonLoader extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    loading: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object
  };

  handleClick (ev) {
    ev.preventDefault();
    this.props.onClick(ev);
  }

  renderIcon () {
    if (!this.props.icon && !this.props.loading) { return null; }
    return (
      <i className={`icon ${this.props.loading ? "notched circle loading" : this.props.icon}`} />
    );
  }

  render () {
    const className = `${this.props.className} ${this.props.color}`.trim() || "";
    return (
      <button
        type={this.props.type}
        className={`ui button ${className}`}
        onClick={this.handleClick.bind(this)}
        disabled={this.props.disabled || this.props.loading}
      >
        {this.renderIcon()}
        {this.props.children}
      </button>
    );
  }
}

export default ButtonLoader;
