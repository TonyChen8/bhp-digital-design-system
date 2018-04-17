import React, { Component } from "react";
import "./styles.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Color from "color";
import classnames from "classnames";

export default class ColorBlock extends Component {
  constructor(props) {
    super(props);

    const { colorHexValue } = props;
    this.state = {
      style: { backgroundColor: colorHexValue ? colorHexValue : "white" }
    };
  }
  render() {
    const { colorHexValue, colorName, cssCode } = this.props;
    return (
      <div className="col-12 col-sm-6 col-md-3">
        <div className="hexBox " style={this.state.style}>
          <CopyToClipboard text={cssCode}>
            <div
              className={classnames(
                "d-flex flex-column justify-content-center",
                "hexBox",
                Color(colorHexValue).dark() ? "text-white" : "text-dark",
                Color(colorHexValue).luminosity() > 0.9 && "border"
              )}
              style={{ backgroundColor: colorHexValue }}
            >
              <div className="copyMessage">Click to copy</div>

              <div>{colorName}</div>
            </div>
          </CopyToClipboard>
        </div>
        <div className="codeBox">{cssCode}</div>
      </div>
    );
  }
}
