import React, { Component } from "react";

import "./styles.css";

export default class DownloadBlock extends Component {
  render() {
    const { name, src } = this.props;

    return (
      <div key={name} className="download-file">
        <div className="download-image">
          <img src={src} alt="" />
        </div>

        <div className="download-name d-flex align-items-center justify-content-between p-2">
          {name}
          <a href={src} download={name}>
            <i className="fa fa-download md-24 align-top" />
          </a>
        </div>
      </div>
    );
  }
}
