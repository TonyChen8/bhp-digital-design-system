import React from 'react';
import Link from 'gatsby-link';
import classnames from 'classnames';
import { withRouter } from 'react-router'

import MDIcon from '../md-icon';
import { BHPLogo } from 'bhp-ui';
import s from './style.module.scss';

// TODO(mgnb): move this to a yaml file
const entries = [
  {
    name: 'Design principles',
    linkTo: '/',
    mdiName: 'explore',
  },
  {
    name: 'Foundation',
    mdiName: 'grid_on',
    subMenu: [
      {
        name: 'Typography',
        linkTo: '/foundation/typography',
      },
      {
        name: 'UI Colours',
        linkTo: '/foundation/ui-colours',
      },
      {
        name: 'Font Icons',
        linkTo: '/foundation/font-icons',
      },
      {
        name: 'Grid',
        linkTo: '/foundation/grid',
      },
      {
        name: 'Tables',
        linkTo: '/foundation/tables',
      },
    ],
  },
  {
    name: 'UI components',
    mdiName: 'widgets',
    subMenu: [
      {
        name: 'Getting Started',
        linkTo: '/ui-components/getting-started',
      },
      {
        name: 'Accordions',
        linkTo: '/ui-components/accordions',
      },
      {
        name: 'Alerts',
        linkTo: '/ui-components/alerts',
      },
      // {
      //   name: 'Auto suggest input',
      //   linkTo: '/ui-components/auto-suggest-input',
      // },
      {
        name: 'Badges and labels',
        linkTo: '/ui-components/badges',
      },
      {
        name: 'Buttons',
        linkTo: '/ui-components/buttons',
      },
      {
        name: 'Cards',
        linkTo: '/ui-components/cards',
      },
      {
        name: 'Checkboxes',
        linkTo: '/ui-components/checkboxes',
      },
      {
        name: 'Date picker',
        linkTo: '/ui-components/date-picker',
      },
      {
        name: 'Dropdowns',
        linkTo: '/ui-components/dropdowns',
      },
      // {
      //   name: 'File browser',
      //   linkTo: '/ui-components/filebrowser',
      // },
      // {
      //   name: 'Header sort',
      //   linkTo: '/ui-components/header-sort',
      // },
      {
        name: 'Icons',
        linkTo: '/ui-components/icons',
      },
      {
        name: 'Input',
        linkTo: '/ui-components/input',
      },
      {
        name: 'Logo',
        linkTo: '/ui-components/logo',
      },
      {
        name: 'List groups',
        linkTo: '/ui-components/list-groups',
      },
      {
        name: 'Modal',
        linkTo: '/ui-components/modal',
      },
      // {
      //   name: 'Month picker',
      //   linkTo: '/ui-components/month-picker',
      // },
      {
        name: 'Navbar',
        linkTo: '/ui-components/navbar',
      },
      {
        name: 'Pagination',
        linkTo: '/ui-components/pagination',
      },
      // {
      //   name: 'Search',
      //   linkTo: '/ui-components/search',
      // },
      // {
      //   name: 'Spinner',
      //   linkTo: '/ui-components/spinner',
      // },
      {
        name: 'Popover',
        linkTo: '/ui-components/popover',
      },
      {
        name: 'Progress bar',
        linkTo: '/ui-components/progress-bar',
      },
      {
        name: 'Tabs',
        linkTo: '/ui-components/tabs',
      },
      {
        name: 'Time picker',
        linkTo: '/ui-components/time-picker',
      },
      {
        name: 'Tooltip',
        linkTo: '/ui-components/tooltip',
      },
      {
        name: 'Toggle switch',
        linkTo: '/ui-components/toggle-switch',
      },
    ],
  },
  {
    name: 'Patterns',
    mdiName: 'style',
    subMenu: [
      {
        name: 'Form layouts',
        linkTo: '/patterns/form-layouts',
      }
    ],
  },
  {
    name: 'Download',
    linkTo: '/download',
    mdiName: 'file_download',
  },
];

const SideBarLink = ({ name, linkTo, mdiName, showToggle, onClick, ...rest }) => {
  if (linkTo) {
    return (
      <Link
        key={name}
        className={s.link}
        exact
        activeClassName={s.activeLink}
        to={linkTo}
        onClick={onClick}
      >
        <MDIcon
          className={s.linkIcon}
          name={mdiName}
        />
        {name}
        {showToggle &&
          <MDIcon
            className={s.toggle}
            name={showToggle}
          />
        }
      </Link>
    );
  } else {
    return (
      <div
        key={name}
        className={s.link}
        onClick={onClick}
      >
        <MDIcon
          className={s.linkIcon}
          name={mdiName}
        />
        {name}
        {showToggle &&
          <MDIcon
            className={s.toggle}
            name={showToggle}
          />
        }
      </div>
    );
  }
};

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = props.location;
    this.state = { selectedSubMenu: null };
    // Ensure that the appropriate sub-menu is open if the page is loaded to
    // a sub-entry
    for (let { name, subMenu } of entries) {
      if (!subMenu) continue;
      if (subMenu.map(({ linkTo }) => linkTo).indexOf(pathname) != -1) {
        this.state.selectedSubMenu = name;
        break;
      }
    }
    this.renderEntry = this.renderEntry.bind(this);
  }

  toggleState(name) {
    this.setState((previousState) => ({
      selectedSubMenu: previousState.selectedSubMenu == name ? null : name
    }));
  }

  renderEntry({ name, subMenu, ...rest }) {
    const isSelectedSubMenu = this.state.selectedSubMenu == name;
    return (
      <div
        key={name}
        className={classnames(s.entry, isSelectedSubMenu && s.selectedEntry)}
      >
        <SideBarLink
          name={name}
          onClick={() => this.toggleState(name)}
          showToggle={subMenu ? (isSelectedSubMenu ? 'keyboard_arrow_down' : 'keyboard_arrow_right') : null}
          {...rest}
        />

        {subMenu && isSelectedSubMenu && <div>
          {subMenu.map(SideBarLink)}
        </div>}
      </div>
    );
  }

  render() {
    return (
      <aside className={s.outer}>
        <Link
          className={s.logoOuter}
          to='/'
        >
          <BHPLogo color='white' />
        </Link>

        <div className={s.entries}>
          {entries.map(this.renderEntry)}
        </div>
      </aside>
    );
  }
}

export default withRouter(SideBar);
