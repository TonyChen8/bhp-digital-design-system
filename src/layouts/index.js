import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import "react-dates/initialize";
import { Label, Input } from "reactstrap";
import { ThemeManager, withTheme, lightTheme, darkTheme } from "bhp-ui-react";

import SideBar from "../components/side-bar";

import "./root.scss";
import "./index-light.scss";
import "./index-dark.scss";
import s from "./index.module.scss";

const TemplateWrapper = withTheme(({ componentInstance, children, data, theme, themes, selectTheme }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} htmlAttributes={{ class: theme.className }} />

    <div className={s.container}>
      <SideBar className={s.sideBar} hideSideBar={componentInstance.state.hideSideBar} 
      onToggle={componentInstance.toggleSidebar.bind(componentInstance)} />

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
                  dehaze
                </i>
                <h1>
                  <Link className={s.headerLink} to="/">
                    Digital Design System
                  </Link>
                </h1>
              </div>

              <div className={s.themeHelp}>
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
                  <Link className={s.headerLink} to="/help">
                    Help
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className={s.bodyContainer}>
          {children()}
        </div>
      </div>
    </div>
  </div>
));

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideSideBar: true
    };
  }

toggleSidebar(){
  this.setState({ hideSideBar: !this.state.hideSideBar })
}

  render() {
    return (
      <ThemeManager themes={[lightTheme, darkTheme]} initialThemeName={lightTheme.name}>
        <TemplateWrapper componentInstance={this} {...this.props} />
      </ThemeManager>
    );
  }
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
