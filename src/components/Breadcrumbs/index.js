import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Entries from "../../router/config";
import { getPrefixedUrl } from "../Commons/helper";

import "./styles.css";
class Breadcrumbs extends React.Component {
  createLink(path, entries) {
    for (let { name, subMenu, linkTo } of entries) {
      if (name && name.length > 0) {
        if (linkTo && getPrefixedUrl(linkTo) === path && !subMenu) {
          return <span>{name}</span>;
        } else if (subMenu) {
          let parent = name;
          for (let { name, linkTo } of subMenu) {
            if (getPrefixedUrl(linkTo) === path) {
              return <span>{`${parent} / ${name}`}</span>;
            }
          }
        }
      }
    }
    return null;
  }

  render() {
    let { currentRoute } = this.props;
    return (
      <div className={"breadcrumbs"}>
        <div className="container">
          <Link to={getPrefixedUrl("/")}>Home</Link>
          {" / "}
          {currentRoute ? this.createLink(currentRoute, Entries) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(Breadcrumbs);
