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
      sidebarOpen: false,
      subMenuOpen: false
    };
    this.sideBarMenuLinks = sidebarMenuLinks;
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.renderLink = this.renderLink.bind(this);
    this.showSubMenu = this.showSubMenu.bind(this);
  }

  toggleSidebar() {
    this.setState(prevState => ({sidebarOpen: !prevState.sidebarOpen}));
  }
  
  showSubMenu() {
    this.setState(prevState => ({subMenuOpen: !prevState.subMenuOpen}));
  }

  renderLink({name, className, linkTo, miName, subMenu}) {
    var subMenuOpen = false;
    return (
      <div>
        <Link
          key={name}
          className={className}
          to={linkTo}
        >
          <div className={s.linkInner}>
            <MaterialDesignIcon name={miName} className={s.materialDesignIcon}/>
            <div className={classnames(s.linkText,!this.state.sidebarOpen && s.disable)}>
              {name}
            </div>
            <div className={classnames(!subMenu && s.disable)} onClick={()=>{this.subMenuOpen=!this.subMenuOpen}} >
              <MaterialDesignIcon name='keyboard_arrow_left' className='keyboard_arrow_left'/>
            </div>
          </div>
        </Link>
        <div className={classnames(!this.subMenuOpen && s.disable)}>
          {_.map(subMenu, this.renderLink)}
        </div>
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
