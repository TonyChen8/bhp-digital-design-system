import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link';
import 'react-dates/initialize';

import SideBar from '../components/side-bar';

import './index.scss'
import s from './index.module.scss';

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
    />

    <div
      className={s.container}
    >
      <SideBar className={s.sideBar} />

      <div className={s.mainBody}>
        <header className={s.header}>
          <h1>
            <Link
              className={s.headerLink}
              to='/'
            >Digital Design System</Link>
          </h1>

          <div className={s.help}>
            Help
          </div>
        </header>

        {children()}
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
