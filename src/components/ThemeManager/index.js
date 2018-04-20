import React, { Component } from "react";
import Helmet from "react-helmet";

const theme = function(name, label, className) {
  this.name = name;
  this.label = label;
  this.className = className;
};

let currentTheme = null;
let subscriptions = [];

export const ThemeSubscriber = {
  subscribe: callback => {
    subscriptions.push(callback);
    //give it a chance to update to the latest value
    callback(currentTheme);
  },
  unsubscribe: value => {
    subscriptions = subscriptions.filter(
      subscription => subscription !== value
    );
  },
  broadcast: value => {
    subscriptions.forEach(
      subscription =>
        typeof subscription === "function"
          ? subscription(value)
          : console.error("Callback function should be a 'function'")
    );
  }
};

export const Themes = [
  new theme("light", "Light", "light-theme"),
  new theme("dark", "Dark", "dark-theme"),
  new theme("warm", "Warm", "warm-theme")
];

export default class ThemeManager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setTheme(value) {
    if (value instanceof theme) {
      currentTheme = value;
      this.setState({ themeName: currentTheme.className });
      ThemeSubscriber.broadcast(currentTheme);
    } else {
      console.warn("Don't create 'theme', please use the exported themes.");
    }
  }

  componentDidMount(props) {
    this.setTheme(this.props.theme);
  }

  componentWillReceiveProps(props) {
    this.setTheme(props.theme);
  }

  render() {
    return (
      <div>
        <Helmet htmlAttributes={{ class: this.state.themeName }} />
        {this.props.children}
      </div>
    );
  }
}
