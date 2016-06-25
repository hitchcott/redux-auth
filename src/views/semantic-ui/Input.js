import React, { PropTypes } from "react";
import Immutable from "immutable";

class AuthInput extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    errors: PropTypes.object
  };

  static defaultProps = {
    label: "",
    value: null,
    errors: Immutable.fromJS([])
  };

  handleInput (ev) {
    this.props.onChange(ev.target.value);
  }

  renderErrorList () {
    if (this.props.errors.size) {
      return (
        <div className="ui pointing red basic label auth-error-message has-error">
          {this.props.errors.map((err, i) => {
            return (
              <div key={i}>{this.props.label} {err}</div>
            );
          })}
        </div>
      );
    } else {
      return <span />;
    }
  }

  render () {
    return (
      <div className={`field ${this.props.errors.size ? "error" : ""}`}>
        {this.props.label &&
          <label>{this.props.label}</label>
        }
        <div className="ui input fluid">
          <input
            {...this.props}
            onChange={this.handleInput.bind(this)}
          />
        </div>
        {this.renderErrorList()}
      </div>
    );
  }
}

export default AuthInput;
