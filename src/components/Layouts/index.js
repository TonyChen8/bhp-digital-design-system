import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Label, Input } from "reactstrap";

import { BHPIcon, Themes, ThemeManager } from "bhp-ui-react";

import { getPrefixedUrl } from "../Commons/helper";
import SideBar from "../Sidebar";
import Breadcrumbs from "../Breadcrumbs";

import "./styles.css";

const gitHubLink = [
  { url: "", name: "Select a repository" },
  { url: "https://github.com/BHP-DevHub/bhp-ui-react", name: "React" },
  { url: "https://github.com/BHP-DevHub/bhp-ui-angular", name: "Angular" },
  { url: "https://github.com/BHP-DevHub/bhp-ui-html", name: "Html" }
];

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.themeIndex = 0;

    this.state = {
      isSideBarOpen: false,
      theme: Themes[this.themeIndex]
    };
  }

  toggleSidebar() {
    this.setState({ isSideBarOpen: !this.state.isSideBarOpen });
  }

  render() {
    const { pathname } = this.props;
    const { isSideBarOpen, theme } = this.state;
    return (
      <div className={"main-container"}>
        <SideBar
          className="side-bar"
          currentRoute={pathname}
          isSideBarOpen={isSideBarOpen}
          onToggle={this.toggleSidebar.bind(this)}
        />
        <div className={"main-body"}>
          <div className="header-container">
            <header className={"header"}>
              <div className={"left-side-bar-btn"} />
              <div className={"container title-layout"}>
                <div className={"title"}>
                  <BHPIcon
                    className="fas fa-bars align-middle expand-btn"
                    size={24}
                    onClick={this.toggleSidebar.bind(this)}
                  />

                  <h1>
                    <Link className={"header-link"} to={getPrefixedUrl("/")}>
                      Digital Design System
                    </Link>
                  </h1>
                </div>

                <div className={"theme-help"}>
                  <div className={"git-hub-link"}>
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

                  <div className={"theme-picker"}>
                    <Label for="theme-name">Theme:</Label>

                    <div className="pl-2 pr-4">
                      <ThemeManager theme={theme}>
                        <Input
                          className="d-inline-block"
                          name="theme-name"
                          type="select"
                          value={this.themeIndex}
                          onChange={event => {
                            this.themeIndex = event.target.value;
                            this.setState({ theme: Themes[this.themeIndex] });
                          }}
                        >
                          {Themes.map((optionTheme, index) => (
                            <option key={optionTheme.name} value={index}>
                              {optionTheme.label}
                            </option>
                          ))}
                        </Input>
                      </ThemeManager>
                    </div>
                  </div>

                  <div className={"help"}>
                    <Link className={"header-link"} to={getPrefixedUrl("/help")}>
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
              currentRoute={pathname}
            />
          </div>
          <div className={"body-container"}>
            {pathname === getPrefixedUrl("/") ? (
              this.props.children
            ) : (
              <div className="container">{this.props.children}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
