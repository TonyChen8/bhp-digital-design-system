import React, { Component } from "react";
import "./styles.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classnames from "classnames";

export default class ColorBlock extends Component {
  render() {
    const { color, colorName, cssCode } = this.props;
    return (
      <div className="col-12 col-sm-6 col-md-3">
        <div className="hexBox">
          <CopyToClipboard text={cssCode}>
            <div
              className={classnames(
                "d-flex flex-column justify-content-center hexBox",
                color
              )}
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
