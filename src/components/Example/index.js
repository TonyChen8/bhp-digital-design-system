import React, { Component } from "react";
import "./styles.css";
import Yaml2Js from "js-yaml";
import classnames from "classnames";
import { getFile, asyncComponent } from "../Commons/helper";
import { Nav, NavItem, NavLink } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Remarkable from "remarkable";

const md = new Remarkable({
  html: true, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />)
  breaks: false, // Convert '\n' in paragraphs into <br>
  linkify: false, // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer: false
});

const codeTypes = {
  react: "React",
  html: "HTML",
  angular: "Angular",
  css: "CSS"
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    let { type } = props.config;
    this.state = {
      yaml: "",
      htmls: [],
      error: null,
      activeTab: type && codeTypes[type] ? type : "react",
      types: [],
      AsyncReactExample: [],
      AsyncReactScript: []
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  componentDidMount() {
    let { type, yaml, components, scripts } = this.props.config;
    // read yaml file content
    getFile(yaml).then(text => {
      try {
        let doc = Yaml2Js.safeLoad(text);
        let types = [];
        if (doc.examples && doc.examples.length > 0) {
          for (let key in codeTypes) {
            if (doc.examples[0].hasOwnProperty(key)) {
              types.push(key);
            }
          }
        }

        this.setState({ yaml: doc, types: types });
      } catch (e) {
        this.setState({ yaml: null, error: e });
        console.error(e);
      }
    });

    // if it is html, read raw html
    if (type === "html") {
      let htmlPaths = [];

      //resolve all html paths
      Promise.all(components).then(
        paths => {
          htmlPaths = paths.map(path => getFile(path));
          // get all htmls raw data
          Promise.all(htmlPaths).then(
            htmls => {
              // update UI
              this.setState({ htmls: htmls });
            },
            error => {
              this.setState({ error: error });
            }
          );
        },
        error => {
          this.setState({ error: error });
        }
      );
    }

    // react components
    let asyncComponents = [];
    for (let i in components) {
      asyncComponents.push(asyncComponent(() => components[i]));
    }
    this.setState({
      AsyncReactExample: asyncComponents
    });

    // react scripts
    let asyncScripts = [];
    for (let i in scripts) {
      asyncScripts.push(asyncComponent(() => scripts[i]));
    }
    this.setState({
      AsyncReactScript: asyncScripts
    });
  }

  toggleTab(codeType) {
    if (this.state.activeTab !== codeType) {
      this.setState({
        activeTab: codeType
      });
    }
  }

  render() {
    const {
      htmls,
      yaml,
      types,
      activeTab,
      AsyncReactExample,
      AsyncReactScript,
      error
    } = this.state;
    if (error) {
      return <div dangerouslySetInnerHTML={{ __html: error }} />;
    }

    const examples = yaml.examples
      ? Array.isArray(yaml.examples) ? yaml.examples : [yaml.examples]
      : null;

    return (
      <div className="markdown">
        <section>
          {yaml.title && <h3 className="pageHeader">{yaml.title}</h3>}
          {yaml.preText && (
            <div
              dangerouslySetInnerHTML={{ __html: md.render(yaml.preText) }}
            />
          )}
          {types.length > 1 && (
            <div className="codeTypePicker">
              <Nav tabs>
                {types.map((codeType, index) => (
                  <NavItem key={index}>
                    <NavLink
                      onClick={() => this.toggleTab(codeType)}
                      className={classnames({
                        active: this.state.activeTab === codeType
                      })}
                    >
                      {codeTypes[codeType]}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </div>
          )}

          {examples &&
            examples.map((example, index) => {
              let Example = null;
              let Script = null;

              return (
                <div key={index}>
                  {index > 0 && <hr />}
                  {example.title && (
                    <h4 className="h4-light">{example.title}</h4>
                  )}

                  {example.introduction && <p>{example.introduction}</p>}

                  {AsyncReactScript.length > 0 &&
                    AsyncReactScript[index] &&
                    (Script = AsyncReactScript[index]) && <Script />}

                  {(AsyncReactExample.length > 0 || htmls.length > 0) && (
                    <div className="exampleDisplay">
                      {example.subTitle && (
                        <div className="exampleSubTitle">
                          {example.subTitle}
                        </div>
                      )}

                      <div className="exampleHtml">
                        {htmls.length > 0 &&
                          htmls[index] && (
                            <div
                              dangerouslySetInnerHTML={{ __html: htmls[index] }}
                            />
                          )}
                        {AsyncReactExample.length > 0 &&
                          AsyncReactExample[index] &&
                          (Example = AsyncReactExample[index]) && <Example />}
                      </div>

                      <div className="exampleCode">
                        <pre>
                          <code>{example[activeTab]}</code>
                        </pre>
                        <div className="copyButton">
                          <CopyToClipboard text={example[activeTab]}>
                            <button className="btn btn-outline-secondary">
                              Copy
                            </button>
                          </CopyToClipboard>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

          {yaml.postText && (
            <div
              dangerouslySetInnerHTML={{ __html: md.render(yaml.postText) }}
            />
          )}
        </section>
      </div>
    );
  }
}
