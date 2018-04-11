/**
 * this function is for code spliting
 */
import React, { Component } from "react";

export const asyncComponent = importComponent => {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
};

/**
 * this function is for url
 */
export const getPrefixedUrl = url =>
  `${process.env.PUBLIC_URL}/${url}`
    .replace(/\/\//g, "/")
    .replace(/:\//, "://");

/**
 * get a file
 */
export const getFile = filePath =>
  fetch(filePath).then(response => response.text());
