import * as React from "react";
import { Component, Fragment } from "react";

import "./AdditionalInfo.css";

export class AdditionalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoVisible: false
    };
  }

  toggleInfo() {
    this.setState({
      infoVisible: !this.state.infoVisible
    });
  }

  render() {
    const { children } = this.props;
    const { infoVisible } = this.state;

    return (
      <Fragment>
        <input
          type="button"
          className="btn moreInfoButtonClass"
          value="More Info"
          onClick={() => this.toggleInfo()}
        />
        <div
          className="moreInfoDivClass"
          style={infoVisible ? {} : { display: "none" }}
        >
          {children}
        </div>
      </Fragment>
    );
  }
}
