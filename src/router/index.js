import React, { Component } from "react";
import Layout from "../components/Layouts";
import { asyncComponent, getPrefixedUrl } from "../components/Commons/helper";
import { Examples } from "../.cache/template";
import NotFoundPage from "../components/404";
import Entries from "./config";
import camelCase from "camel-case";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const AsyncHome = asyncComponent(() => import("../components/Home"));
const AsyncExample = asyncComponent(() => import("../components/Example"));
const AsyncHelp = asyncComponent(() => import("../components/Help"));

const RedirectAs404 = ({ location }) => (
  <Redirect to={Object.assign({}, location, { state: { is404: true } })} />
);

export default class BHPRouter extends Component {
  generateRoute(menuItem, index) {
    let { linkTo } = menuItem;
    let match = linkTo.match(/([^/]*)\/*$/);
    let componentName = null;
    if (match.length > 1 && match[1].length > 0) {
      componentName = camelCase(match[1]);
      return (
        <Route
          key={index}
          path={getPrefixedUrl(linkTo)}
          render={props => (
            <AsyncExample config={Examples[componentName]} {...props} />
          )}
        />
      );
    } else if (match.length > 1 && match[0].length > 0) {
      //this case is the root url. Because we cannot name the "home.yaml" file to "/.yaml",
      //give a special name "home" to the home component.
      componentName = "home";
      return (
        <Route
          key={index}
          exact
          path={getPrefixedUrl(linkTo)}
          component={AsyncHome}
        />
      );
    } else {
      console.warn(
        `Cannot find correct Router: "${linkTo}", please check router config file.`
      );
      return null;
    }
  }

  render() {
    return (
      <Router>
        <Route
          render={({ location }) => {
            return location.state && location.state.is404 ? (
              <NotFoundPage />
            ) : (
              <Layout pathname={location.pathname || ""}>
                <Switch>
                  {Entries.map(
                    (entry, index) =>
                      entry.subMenu
                        ? entry.subMenu.map((menuItem, index) =>
                            this.generateRoute(menuItem, index)
                          )
                        : this.generateRoute(entry, index)
                  )}

                  <Route path={getPrefixedUrl("/help")} component={AsyncHelp} />
                  <Route component={RedirectAs404} />
                </Switch>
              </Layout>
            );
          }}
        />
      </Router>
    );
  }
}

