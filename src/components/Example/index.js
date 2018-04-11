import React, { Component } from "react";
import "./styles.css";
import Yaml2Js from "js-yaml";
import classnames from "classnames";
import { getFile, asyncComponent, getPrefixedUrl } from "../Commons/helper";

import { Nav, NavItem, NavLink } from "reactstrap";

const codeTypes = [
  { type: "react", display: "React" },
  { type: "html", display: "HTML" },
  { type: "angular", display: "Angular" },
  { type: "css", display: "CSS" }
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: "",
      error: null,
      activeTab: codeTypes[0],
      types: [],
      AsyncReactExample: null
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    let instance = this;
    let { yaml, components } = this.props.config;
console.log(yaml, components)
    getFile(yaml).then(text => {
      try {
        let doc = Yaml2Js.safeLoad(text);
        let types = [];
        if (doc.examples && doc.examples.length > 0) {
          for (let index = 0; index < codeTypes.length; index++) {
            if (doc.examples[0].hasOwnProperty(codeTypes[index].type)) {
              types.push(codeTypes[index]);
            }
          }
        }

        instance.setState({ html: doc, types: types });
      } catch (e) {
        instance.setState({ html: null, error: e });
        console.log(e);
      }
    });

    let asyncComponents = [];
    for (let i in components) {
      asyncComponents.push(asyncComponent(() => components[i]));
    }
    this.setState({
      AsyncReactExample: asyncComponents
    });
  }

  toggle(codeType) {
    if (this.state.activeTab !== codeType) {
      this.setState({
        activeTab: codeType
      });
    }
  }

  render() {
    const { html, types, activeTab, AsyncReactExample } = this.state;
    if (!html) {
      return <div dangerouslySetInnerHTML={{ __html: this.state.error }} />;
    }

    return (
      <div>
        <div className="container">
          {html.title && <h3 className="pageHeader">{html.title}</h3>}
          {html.preText && <p>{html.preText}</p>}
          {types.length > 0 && (
            <div className="codeTypePicker">
              <Nav tabs>
                {types.map((codeType, index) => (
                  <NavItem key={index}>
                    <NavLink
                      onClick={() => this.toggle(codeType)}
                      className={classnames({
                        active: this.state.activeTab === codeType
                      })}
                    >
                      {codeType.display}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </div>
          )}

          {html.examples &&
            html.examples.map((example, index) => {
              let Example = null;
              console.log(AsyncReactExample[0]);
              return (
                <div key={index}>
                  {index > 0 && <hr />}
                  {example.title && (
                    <h4 className="h4-light">{example.title}</h4>
                  )}
                  {example.introduction && <p>{example.introduction}</p>}
                  <div className="exampleDisplay">
                    {example.subTitle && (
                      <div className="exampleSubTitle">{example.subTitle}</div>
                    )}

                    <div className="exampleHtml">
                      {AsyncReactExample &&
                        (Example = AsyncReactExample[index]) && <Example />}
                    </div>

                    <div className="exampleCode">
                      <pre>
                        <code>{example[activeTab.type]}</code>
                      </pre>
                      <div className="copyButton">
                        <button className="btn btn-outline-secondary">
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
