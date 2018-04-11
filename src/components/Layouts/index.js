import React, { Component } from "react";

import Helmet from "react-helmet";
import { ThemeManager, withTheme, lightTheme, darkTheme } from "bhp-ui-react";
import { Link } from "react-router-dom";
import { getPrefixedUrl } from "../Commons/helper";
import { Label, Input } from "reactstrap";
// import SideBar from "../components/side-bar";
import "./styles.css";

const gitHubLink = [
  { url: "", name: "Select a repository" },
  { url: "https://github.com/BHP-DevHub/bhp-ui-react", name: "React" },
  { url: "https://github.com/BHP-DevHub/bhp-ui-angular", name: "Angular" },
  { url: "https://github.com/BHP-DevHub/bhp-ui-html", name: "Html" }
];

const TemplateWrapper = withTheme(
  ({ componentInstance, children, data, theme, themes, selectTheme }) => (
    <div>
      <Helmet htmlAttributes={{ class: theme.className }} />

      <div className={"container"}>
        <div className={"mainBody"}>
          <header className={"header"}>
            <div className={"leftSideBar"} />
            <div className={"titleLayout"}>
              <div className={"title"}>
                <i
                  className={"material-icons md-24 align-top expandBtn"}
                  onClick={componentInstance.toggleSidebar.bind(
                    componentInstance
                  )}
                >
                  menu
                </i>

                <h1>
                  <Link className={"headerLink"} to={getPrefixedUrl("/")}>
                    Digital Design System
                  </Link>
                </h1>
              </div>

              <div className={"themeHelp"}>
                <div className={"gitHubLink"}>
                  <Label for="git-hub-link">Download:</Label>

                  <div className="pl-2 pr-4">
                    <Input
                      className="d-inline-block"
                      name="git-hub-link"
                      type="select"
                      onChange={event =>
                        event.target.value.length > 0 &&
                        window.open(event.target.value, "_blank")
                      }
                    >
                      {gitHubLink.map(link => (
                        <option key={link.name} value={link.url}>
                          {link.name}
                        </option>
                      ))}
                    </Input>
                  </div>
                </div>

                <div className={"themePicker"}>
                  <Label for="theme-name">Theme:</Label>

                  <div className="pl-2 pr-4">
                    <Input
                      className="d-inline-block"
                      name="theme-name"
                      type="select"
                      value={theme.name}
                      onChange={event => selectTheme(event.target.value)}
                    >
                      {themes.map(theme => (
                        <option key={theme.name} value={theme.name}>
                          {theme.label}
                        </option>
                      ))}
                    </Input>
                  </div>
                </div>

                <div className={"help"}>
                  <Link className={"headerLink"} to={getPrefixedUrl("/help")}>
                    Help
                  </Link>
                </div>
              </div>
            </div>
          </header>
          <div className={"bodyContainer"}>
            {componentInstance.props.children}
          </div>
        </div>
      </div>
    </div>
  )
);

export default class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSideBarOpen: false
    };
  }

  toggleSidebar() {
    this.setState({ isSideBarOpen: !this.state.isSideBarOpen });
  }

  render() {
    return (
      <ThemeManager
        themes={[lightTheme, darkTheme]}
        initialThemeName={lightTheme.name}
      >
        <TemplateWrapper componentInstance={this} {...this.props} />
      </ThemeManager>
    );
  }
}
