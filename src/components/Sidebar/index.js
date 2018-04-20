import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { getPrefixedUrl } from "../Commons/helper";
import { BHPLogo, BHPIcon } from "bhp-ui-react";
import "./styles.css";
import Entries from "../../router/config";

const SideBarLink = ({
  name,
  linkTo,
  mdiName,
  showToggle,
  onClick,
  currentRoute,
  ...rest
}) => {
  if (linkTo) {
    return (
      <Link
        key={name}
        className={classnames(
          "link",
          getPrefixedUrl(linkTo) === currentRoute ? "active-link" : ""
        )}
        to={getPrefixedUrl(linkTo)}
        onClick={onClick}
      >
        {mdiName && (
          <BHPIcon className={`fas fa-${mdiName} link-icon`} name={mdiName} />
        )}
        {name}
        {showToggle && (
          <BHPIcon className={`fas fa-angle-${showToggle}`} name={showToggle} />
        )}
      </Link>
    );
  } else {
    return (
      <div key={name} className={"link"} onClick={onClick}>
        {mdiName && (
          <BHPIcon className={`fas fa-${mdiName} link-icon`} name={mdiName} />
        )}
        {name}
        {showToggle && (
          <BHPIcon
            className={`fas fa-angle-${showToggle} toggle`}
            name={showToggle}
          />
        )}
      </div>
    );
  }
};

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    const { currentRoute } = props;
    this.state = {
      selectedSubMenu: null
    };
    // Ensure that the appropriate sub-menu is open if the page is loaded to
    // a sub-entry
    for (let { name, subMenu } of Entries) {
      if (!subMenu) continue;
      if (subMenu.map(({ linkTo }) => linkTo).indexOf(currentRoute) !== -1) {
        this.state.selectedSubMenu = name;
        break;
      }
    }
    this.renderEntry = this.renderEntry.bind(this);
  }

  toggleState(name) {
    this.setState(previousState => ({
      selectedSubMenu: previousState.selectedSubMenu === name ? null : name
    }));
  }

  renderEntry({ name, subMenu, currentRoute, ...rest }) {
    const isSelectedSubMenu = this.state.selectedSubMenu === name;
    return (
      <div
        key={name}
        className={classnames("entry", isSelectedSubMenu && "selected-entry")}
      >
        <SideBarLink
          name={name}
          currentRoute={currentRoute}
          onClick={() => this.toggleState(name)}
          showToggle={subMenu ? (isSelectedSubMenu ? "down" : "right") : null}
          {...rest}
        />

        {subMenu &&
          isSelectedSubMenu && (
            <div>
              {subMenu.map(entry =>
                SideBarLink({ currentRoute: currentRoute, ...entry })
              )}
            </div>
          )}
      </div>
    );
  }

  render() {
    return (
      <aside
        className={classnames(
          "outer",
          this.props.isSideBarOpen === false && "hide-side-bar"
        )}
      >
        <div className={"overlay"} onClick={this.props.onToggle} />
        <Link className={"logo-outer"} to={getPrefixedUrl("/")}>
          <BHPLogo color="white" />
        </Link>

        <div className={"entries"}>
          {Entries.map(entry =>
            this.renderEntry({
              currentRoute: this.props.currentRoute,
              ...entry
            })
          )}
        </div>
      </aside>
    );
  }
}

export default SideBar;
