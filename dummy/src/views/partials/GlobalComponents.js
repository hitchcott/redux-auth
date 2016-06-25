import React from "react";
import RequestTestSuccessModal from "./RequestTestSuccessModal";
import RequestTestErrorModal from "./RequestTestErrorModal";
import * as BSTheme from "../../../../src/views/bootstrap";
import * as DefaultTheme from "../../../../src/views/default";
import * as MUITheme from "../../../../src/views/material-ui";
import * as SUITheme from "../../../../src/views/semantic-ui";
import { connect } from "react-redux";

class GlobalComponents extends React.Component {
  render () {
    let Theme = MUITheme;
    switch(this.props.theme) {
      case "default":
        Theme = DefaultTheme;
        break;
      case "semanticUi":
        Theme = SUITheme;
        break;
      case "bootstrap":
        Theme = BSTheme;
        break;
    }
    return (
      <div>
        <Theme.AuthGlobals />
        <RequestTestSuccessModal />
        <RequestTestErrorModal />
      </div>
    );
  }
}

export default connect(({demoUi}) => {
  return ({
    theme: demoUi.get("theme"),
  })
})(GlobalComponents);
