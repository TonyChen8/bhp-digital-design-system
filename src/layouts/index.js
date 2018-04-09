import React, { Component } from 'react';
import Helmet from "react-helmet";
import { ThemeManager, withTheme, lightTheme, darkTheme } from "bhp-ui-react";

import { Label, Input } from "reactstrap";
// import SideBar from "../components/side-bar";
import s from "./index.module.css";

const gitHubLink = [
  {url: "", name: "Select a repository" },
  {url: "https://github.com/BHP-DevHub/bhp-ui-react", name: "React" },
  {url: "https://github.com/BHP-DevHub/bhp-ui-angular", name: "Angular" },
  {url: "https://github.com/BHP-DevHub/bhp-ui-html", name: "Html" },
];

const TemplateWrapper = withTheme(({ componentInstance, children, data, theme, themes, selectTheme }) => (
  <div>
    <Helmet title="data.site.siteMetadata.title" htmlAttributes={{ class: theme.className }} />

    <div className={s.container}>


      <div className={s.mainBody}>
        <header className={s.header}>
          <div className={s.leftSideBar}>
          </div>
          <div className="container">
            <div className={s.titleLayout}>
              <div className={s.title}>
                <i
                  className={"material-icons md-24 align-top " + s.expandBtn}
                  onClick={componentInstance.toggleSidebar.bind(componentInstance)}
                >
                  menu
                </i>

                <h1>
                  <a className={s.headerLink} href="/">
                    Digital Design System
                  </a>
                </h1>
              </div>

              <div className={s.themeHelp}>
                <div className={s.gitHubLink}>
                  <Label for="git-hub-link">Download:</Label>

                  <div className="pl-2 pr-4">
                    <Input
                      className="d-inline-block"
                      name="git-hub-link"
                      type="select"
                      onChange={event => event.target.value.length>0 && window.open(event.target.value,'_blank')}
                    >
                      {gitHubLink.map(link => (
                        <option key={link.name} value={link.url}>
                          {link.name}
                        </option>
                      ))}
                    </Input>
                  </div>
                </div>

                <div className={s.themePicker}>
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

                <div className={s.help}>
                  <a className={s.headerLink} to="/help">
                    Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className={s.bodyContainer}>

    <div>
      <div><span className="text-muted">The quick brown fox jumps over the lazy dog.</span></div>
      <div><span className="text-primary">The quick brown fox jumps over the lazy dog.</span></div>
      <div><span className="text-warning">The quick brown fox jumps over the lazy dog.</span></div>
      <div><span className="text-danger">The quick brown fox jumps over the lazy dog.</span></div>
      <div><span className="text-success">The quick brown fox jumps over the lazy dog.</span></div>
      <div><span className="text-info">The quick brown fox jumps over the lazy dog.</span></div>
    </div>

        </div>
      </div>
    </div>
  </div>
));


export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSideBarOpen: false
    };
  }

toggleSidebar(){
  this.setState({ isSideBarOpen: !this.state.isSideBarOpen })
}

  render() {
    return (
      <ThemeManager themes={[lightTheme, darkTheme]} initialThemeName={lightTheme.name}>
        <TemplateWrapper componentInstance={this} {...this.props} />
      </ThemeManager>
    );
  }
}

