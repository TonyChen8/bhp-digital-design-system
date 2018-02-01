import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link';
import 'react-dates/initialize';
import { Label, Input } from 'reactstrap';
import { ThemeManager, withTheme, lightTheme, darkTheme } from 'bhp-ui-react';

import SideBar from '../components/side-bar';

import './root.scss'
import './index-light.scss'
import './index-dark.scss'
import s from './index.module.scss';

const TemplateWrapper = withTheme(({ children, data, theme, themes, selectTheme }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      htmlAttributes={{ 'class': theme.className }}
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

          <div className={s.themePicker}>
            <Label for='theme-name'>Theme:</Label>

            <div className='pl-2 pr-4'>
              <Input
                className='d-inline-block'
                name='theme-name'
                type='select'
                value={theme.name}
                onChange={event => selectTheme(event.target.value)}
              >
                {themes.map(theme => (
                  <option
                    key={theme.name}
                    value={theme.name}
                  >
                    {theme.label}
                  </option>
                ))}
              </Input>
            </div>
          </div>

          <div className={s.help}>
            Help
          </div>
        </header>

        {children()}
      </div>
    </div>
  </div>
))

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default props => (
  <ThemeManager
    themes={[lightTheme, darkTheme]}
    initialThemeName={lightTheme.name}
  >
    <TemplateWrapper {...props} />
  </ThemeManager>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
