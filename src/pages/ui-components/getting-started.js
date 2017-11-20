import React from 'react'
import _ from 'lodash';
import chromeImg from '../../library/images/chrome.svg';
import edgeImg from '../../library/images/edge.svg';
import firefoxImg from '../../library/images/firefox.svg';
import safariImg from '../../library/images/safari.svg';
import s from './style.module.css';

var BrowserContainer = ({img, name, support}) => (
  (
    <div key={name}className={s.BrowserContainer}>
      <img src={img} className={s.browserImg}/>
      <span><strong>{name}</strong></span>
      <span>{support}</span>
    </div>
  )
)

const browsers = [
  {
    name: 'Internet Explorer 10',
    img: edgeImg,
    support: '(or later)'
  },
  {
    name: 'Chrome',
    img: chromeImg,
    support: '(latest two versions)'
  },
  {
    name: 'Firefox',
    img: firefoxImg,
    support: '(latest two versions)'
  },
  {
    name: 'Safari',
    img: safariImg,
    support: '(latest two versions)'
  }
]

const gettingStarted = () => (
  <div className='pageContainerGlobalClass'>
    <div className='pageMainContentGlobalClass'>
      <p className='pageTitleGlobalClass'>Getting Started</p>
      <p className='subTitleGlobalClass'>Using BHP Design Pattern Library (DPL) Components</p>
      <p>
        Our components are a collection of front-end interface elements that can be reused across the BHP browser-based products.
      </p>
      <p>
        We offer four variations of components — React, HTML, CSS and Angular variations where applicable. If your
        project can utilise React components then it is recommended to use these going forward. Using React components
        in your project enables BHP to adhere to a consistent interactive experience that will scale over time and help
        reduce technical debt throughout our web-based product lines.
      </p>
      <p className='subTitleGlobalClass'>React widgets</p>
      <p>Our BHP widget repository contains the common React widgets used by our web-based products. You will need
        private Github access to this repository to begin working with BHP widgets at this stage. Please contact your
        dev manager to enable this. Always visit the Github repository for latest updates.
      </p>
      <p><strong>Contributing to our React widgets</strong></p>
      <p>We encourage all BHP developers to contribute to our React widget library.</p>
      <p><strong>Browser support</strong></p>
      <p>Our React and HTML components are designed to work as intended in the following browsers:</p>
      <div className={s.BrowserSupportContainer}>
        {_.map(browsers, BrowserContainer)}
      </div>
      
      <p className='subTitleGlobalClass'>Third party installation of this project</p>
      <p>For information about how to access our NPM registry, look here: <br />   https://******BHP link*******</p>
      <p>Third party installation of this project <br />The project is available as an NPM package and deployed in our private NPM registry:  https://npm.addevcloudservices.com.au/</p>
      <p>The dist directory contains the pre-packaged distributable files.</p>
    </div>
    <div className='pageRightSideMenuGlobalClass'>
    </div>
  </div>
)

export default gettingStarted
