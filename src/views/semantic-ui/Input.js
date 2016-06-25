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
        <div className='auth-error-message has-error'>
          {this.props.errors.map((err, i) => {
            return (
              <p className="control-label inline-error-item"
                 style={{paddingLeft: "20px", position: "relative", marginBottom: "28px"}}
                 key={i}>

                <Glyphicon glyph="exclamation-sign"
                           style={{
                             position: "absolute",
                             left: 0,
                             top: 2
                           }}
                /> {this.props.label} {err}
              </p>
            );
          })}
        </div>
      );
    } else {
      return <span />;
    }
  }

  render () {
    const classes = "";

    return (
      <div className="field">
        {this.props.label &&
          <label>{this.props.label}</label>
        }
        <div className={`ui input fluid ${classes}`}>
          <input
            {...this.props}
            onChange={this.handleInput.bind(this)}
          />
          {this.renderErrorList()}
        </div>
      </div>
    );
  }
}

export default AuthInput;
