import React, { Component } from "react";

import Helmet from "react-helmet";
import {
  ThemeManager,
  withTheme,
  lightTheme,
  darkTheme,
  BHPIcon
} from "bhp-ui-react";
import { Link } from "react-router-dom";
import { getPrefixedUrl } from "../Commons/helper";
import { Label, Input } from "reactstrap";
import SideBar from "../Sidebar";
import Breadcrumbs from "../Breadcrumbs";

import "./styles.css";

const gitHubLink = [
  { url: "", name: "Select a repository" },
  { url: "https://github.com/BHP-DevHub/bhp-ui-react", name: "React" },
  { url: "https://github.com/BHP-DevHub/bhp-ui-angular", name: "Angular" },
  { url: "https://github.com/BHP-DevHub/bhp-ui-html", name: "Html" }
];

const TemplateWrapper = withTheme(
  ({
    componentInstance,
    children,
    data,
    theme,
    themes,
    selectTheme,
    currentRoute
  }) => (
    <div>
      <Helmet htmlAttributes={{ class: theme.className }} />

      <div className={"mainContainer"}>
        <SideBar
          className="sideBar"
          currentRoute={currentRoute}
          isSideBarOpen={componentInstance.state.isSideBarOpen}
          onToggle={componentInstance.toggleSidebar.bind(componentInstance)}
        />
        <div className={"mainBody"}>
          <div className="headerContainer">
            <header className={"header"}>
              <div className={"leftSideBarBtn"} />
              <div className={"container titleLayout"}>
                <div className={"title"}>
                  <BHPIcon
                    className="fas fa-bars align-middle expandBtn"
                    size={24}
                    onClick={componentInstance.toggleSidebar.bind(
                      componentInstance
                    )}
                  />

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
            <Breadcrumbs
              category="Foundation"
              slug="foundation/ui-colours"
              title="UI Colours"
              currentRoute={currentRoute}
            />
          </div>
          <div className={"bodyContainer"}>
            {currentRoute === getPrefixedUrl("/") ? (
              componentInstance.props.children
            ) : (
              <div className="container">
                {componentInstance.props.children}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
);

export default class Layout extends Component {
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
        <TemplateWrapper
          componentInstance={this}
          currentRoute={this.props.pathname}
          {...this.props}
        />
      </ThemeManager>
    );
  }
}
