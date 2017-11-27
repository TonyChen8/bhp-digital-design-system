import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import SideBar from '../components/sidebar'
import './style.css'
import MaterialDesignIcon from '../library/MaterialDesignIcon';
import _ from 'lodash';

import './index.css'
import './Hopscotch.css'

const Header = () => (
  <div
    style={{
      display: 'flex',
      height: '60px',
      backgroundColor: '#ffffff',
      padding: '20px 22px',
      color: '#333333',
      justifyContent: 'space-between',
      borderBottom: '1px solid #d8d8d8'
    }}
  >
    <div
      style={{
        fontSize: '24px',
      }}
    >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#333333',
          }}
        >
          Digital Design System
        </Link>
    </div>
    <div>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#333333',
          }}
        >
          Help
        </Link>
    </div>
  </div>
)


function route(route, index) {
  if (_.isEmpty(route)) {
    if (index == 1) return
    return(
      <Link key ={index} className='navItem' to='/'>
        <span> Home&nbsp;&nbsp;</span>
      </Link>
    )
  }
  
  return (
    <Link key ={index} className='navItem' to={route}>
      <span>  /&nbsp;&nbsp;{_.startCase(_.toLower(route))}&nbsp;</span>
    </Link>
  )
}

function renderRouteContainer (pathname) {
  var routes = _.split(pathname, '/',3);
  return (
    <div className='routeContainer'>
      <div className='routesLinks'>{_.map(routes, route)}</div>
    </div>
  )
}

const TemplateWrapper = ({ children, location }) => (
  <div className='templateWrapper'>
    <SideBar />
    <div className='innerContainer'>
      <Header />
      {renderRouteContainer(location.pathname)}
      <div className='children'>
        {children()}
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
