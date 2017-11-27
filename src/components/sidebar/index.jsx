import classnames from 'classnames';
import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';
import MaterialDesignIcon from '../../library/MaterialDesignIcon';
import bhpWhiteLogo from '../../library/images/BHP-White.svg';

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
    if(menuName==this.state.subMenuOpenFor) {
      // toggling sidemenu
      menuName= '';
    }
    this.setState({subMenuOpenFor: menuName});
  }

  renderLink({name, className, linkTo, miName, subMenu}) {
    var subMenuOpenFor = '';
    if(name==this.state.subMenuOpenFor) {
      subMenuOpenFor = true;
    }
    
    if (subMenu) {
      return (
        <div>
          <Link activeClassName={s.activeLink} onClick={e => {e.preventDefault(); this.showSubMenu(name)}} key={name} className={s.linkContainer}>
            <MaterialDesignIcon name={miName} className={s.materialDesignIcon}/>
            <div className={classnames(s.linkText,!this.state.sidebarOpen && s.disable)}>
              {name}
            </div>

            <div>
            <span className={classnames(subMenuOpenFor && s.disable, s.sidebarArrow)}><MaterialDesignIcon name='keyboard_arrow_left' /></span>
            <span  className={classnames(!subMenuOpenFor && s.disable, s.sidebarArrow)}><MaterialDesignIcon name='keyboard_arrow_down' /></span>
            </div>
          </Link>
          <div className={classnames(!subMenuOpenFor && s.disable)}>
            {_.map(subMenu, this.renderLink)}
          </div>
        </div>
      );
    }
    return (
      <div>
        <Link
          key={name}
          to={linkTo}
          className={s.linkContainer}
          activeClassName={s.activeLink}
        >
          <MaterialDesignIcon name={miName} className={s.materialDesignIcon}/>
          <div className={classnames(s.linkText,!this.state.sidebarOpen && s.disable)}>
            {name}
          </div>
        </Link>
        </div>
    );
  }

  render() {
    var sidebarOpen = this.state.sidebarOpen;

    return (
      <aside className={classnames(s.sideBar, sidebarOpen && s.fullSideBar)}>
        <div className={s.sideMenuLogoContainer}><Link to='/design-principles'><img src={bhpWhiteLogo} /></Link></div>
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
