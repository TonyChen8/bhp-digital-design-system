import classnames from 'classnames';
import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';
import MaterialDesignIcon from '../../library/MaterialDesignIcon';

import sidebarMenuLinks from '../../data/sidebar';

import s from './style.module.css';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      subMenuOpenFor: ''
    };
    this.sideBarMenuLinks = sidebarMenuLinks;
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.renderLink = this.renderLink.bind(this);
    this.showSubMenu = this.showSubMenu.bind(this);
  }

  toggleSidebar() {
    this.setState(prevState => ({sidebarOpen: !prevState.sidebarOpen}));
  }
  
  showSubMenu(menuName) {
    this.setState({subMenuOpenFor: menuName});
  }

  renderLink({name, className, linkTo, miName, subMenu}) {
    var subMenuOpenFor = '';
    if(name==this.state.subMenuOpenFor) {
      subMenuOpenFor = true;
    }
    
    if (subMenu) {
      return (
        <div key={name} className={s.linkContainer}>
          <span
            key={name}
            className={s.linkClass}
          >
            <div className={s.linkInner}>
              <MaterialDesignIcon name={miName} className={s.materialDesignIcon}/>
              <div className={classnames(s.linkText,!this.state.sidebarOpen && s.disable)}>
                {name}
              </div>
            </div>
          </span>
          <div className={classnames(!subMenu && s.disable, s.sidebarArrow)}  >
            <span onClick={()=>{this.showSubMenu(name)}} className={classnames(subMenuOpenFor && s.disable)}><MaterialDesignIcon name='keyboard_arrow_left' className={classnames('keyboard_arrow_left', !this.state.sidebarOpen && s.disable)}/></span>
            <span onClick={()=>{this.showSubMenu('')}} className={classnames(!subMenuOpenFor && s.disable)}><MaterialDesignIcon name='keyboard_arrow_down' className={classnames('keyboard_arrow_down', !this.state.sidebarOpen && s.disable)}/></span>
          </div>
          <div className={classnames(!subMenuOpenFor && s.disable, s.subMenu)}>
            {_.map(subMenu, this.renderLink)}
          </div>
        </div>
      );
    }
    return (
      <div key={name} className={s.linkContainer}>
        <Link
          key={name}
          className={s.linkClass}
          to={linkTo}
          activeClassName={s.activeLink}
        >
          <div className={s.linkInner}>
            <MaterialDesignIcon name={miName} className={s.materialDesignIcon}/>
            <div className={classnames(s.linkText,!this.state.sidebarOpen && s.disable)}>
              {name}
            </div>
          </div>
        </Link>
      </div>
    );
  }

  render() {
    var sidebarOpen = this.state.sidebarOpen;

    return (
      <aside className={classnames(s.sideBar, sidebarOpen && s.fullSideBar)}>
        <div className={s.sideMenuLogoContainer}>BHP</div>
        <div className={classnames(s.closeIcon,!sidebarOpen && s.disable)} onClick={this.toggleSidebar} >
          <MaterialDesignIcon name="arrow_back" />
        </div>
        <div className={classnames(s.naviconIcon,sidebarOpen && s.disable)} onClick={this.toggleSidebar} >
          <MaterialDesignIcon name="menu" />
        </div>
        {_.map(this.sideBarMenuLinks, this.renderLink)}
      </aside>
    );
  }

}

export default SideBar;
