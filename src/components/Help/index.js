import React, { Component } from "react";
import "./styles.css";
import Remarkable from "remarkable";
import { getFile } from "../Commons/helper";
import markdownFile from "./content.md";

const md = new Remarkable({
  html: true, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />)
  breaks: false, // Convert '\n' in paragraphs into <br>
  // langPrefix:   'language-',  // CSS language prefix for fenced blocks
  linkify: false, // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer: false

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  // quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  // highlight: function (/*str, lang*/) { return ''; }
});

export default class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: ""
    };
    let instance = this;
    getFile(markdownFile).then(text =>
      instance.setState({ html: md.render(text) })
    );
  }
  render() {
    return (
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: this.state.html }}
      />
    );
  }
}
