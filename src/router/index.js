import React, { Component } from "react";
import Layout from "../components/Layouts";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { asyncComponent, getPrefixedUrl } from "../components/Commons/helper";
import {Examples} from "../.cache/template"

console.log(Examples)
const AsyncHome = asyncComponent(() => import("../components/Home"));
const AsyncExample = asyncComponent(() => import("../components/Example"));

export default class BHPRouter extends Component {
	render() {
		return (
			<Router>
				<Layout>
					<Route exact path={getPrefixedUrl("/")} component={AsyncHome} />
					<Route path={getPrefixedUrl("/example")} render={props => <AsyncExample config={Examples.badges}  {...props} />} />
					<Route path={getPrefixedUrl("/topics")} component={AsyncHome} />
				</Layout>
			</Router>
		);
	}
}
