import React from 'react'
import Link from 'gatsby-link'
import Button from '../../components/button'
import Block from '../../components/block'
import s from './style.module.css'
import MaterialDesignIcon from '../../library/MaterialDesignIcon';
import classnames from 'classnames';

const uiColours = () => (
  <div className='pageContainerGlobalClass'>
    <div className='pageMainContentGlobalClass'>
      <p className='pageTitleGlobalClass' id='guide'>Font icons</p>
      <p id='material_design'>We are promoting the use of <a  target="_blank" className={s.pageAnchors} href="https://material.io/icons/">Material design font icons</a>. These font icons are simple, modern and friendly. Each icon is created using Material design guidelines to depict in simple and minimal forms the universal concepts used commonly throughout a user interface. </p>
      <p id='font_awesome'>In some case (design need or topical icons) <a  target="_blank"className={s.pageAnchors} href="http://fontawesome.io/cheatsheet/">Font Awesome</a> can be used as secondary option.</p>
      <p>
        When you have to use a special icon (product / event / campaign…) we recommend using Scalable Vector
        Graphic (SVG) formats only. By not using the traditional pixel-based formats (.GIF .PNG .JPEG) you ensure
        a high quality display at any screen depth (HD, Retina, UHD…)
      </p>
      <div className={s.borderBottomDiv}> </div>
      <p className='subTitleGlobalClass'>Material Design font icons</p>

      <span className={classnames('flexContainerGlobalClass', 'noBorderGlobalClass')} >
        <MaterialDesignIcon color ='#2da3d7' name='arrow_forward' className='keyboard_arrow_left'/>
        <a className={s.pageRightSideMenuAnchor} target="_blank" href='https://google.github.io/material-design-icons/'>Material Icons guide</a>
      </span>
      <span className={classnames('flexContainerGlobalClass', 'noBorderGlobalClass')}>
        <MaterialDesignIcon color ='#2da3d7' name='arrow_forward' className='keyboard_arrow_left'/>
        <a className={s.pageRightSideMenuAnchor} target="_blank" href='https://material.io/icons/'>See the full set of material design icons in the Material Icons Library</a>
      </span>

      <p className='subTitleGlobalClass'>Git repository</p>
      <p>
        The material icons are available from the git repository which contains the complete set of icons including all the various formats we are making available.
      </p>
      <code className='flexContainerGlobalClass'>$ git clone http://github.com/google/material-design-icons/</code>

      <p id='cheat_sheet' className='subTitleGlobalClass'>Icon font for the web</p>
      <p>
        The material icon font is the easiest way to incorporate material icons with web projects. We have packaged all the material icons into a single font that takes advantage of the typographic rendering capabilities of modern browsers so that web developers can easily incorporate these icons with only a few lines of code.
      </p>
      <p><strong>Setup Method 1. Using via Google Web Fonts</strong></p>
      <p>The easiest way to set up icon fonts for use in any web page is through Google Web Fonts. All you need to do is include a single line of HTML:</p>
      <p><code className='flexContainerGlobalClass'>{'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />'}</code></p>
      <p>Similar to other Google Web Fonts, the correct CSS will be served to activate the 'Material Icons' font specific to the browser. An additional CSS class will be declared called .material-icons. Any element that uses this class will have the correct CSS to render these icons from the web font.</p>
      <p><strong>Setup Method 2. Self hosting</strong></p>
      <p>For those looking to self host the web font, some additional setup is necessary. Host the icon font in a location, for example https://example.com/material-icons.woff and add the following CSS rule:</p>
      <code className='flexContainerGlobalClass'><pre>{`
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
  local('MaterialIcons-Regular'),
  url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
  url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
  url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
}
      `}</pre></code>

<br /><p>In addition, the CSS rules for rendering the icon will need to be declared to render the font properly. These rules are normally served as part of the Google Web Font stylesheet, but will need to be included manually in your projects when self-hosting the font:</p>


<code className='flexContainerGlobalClass'><pre>{`
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
`}</pre></code>

    </div>
    <div className='pageRightSideMenuGlobalClass'>
      <a className={s.pageRightSideMenuAnchor} href='#guide'>Guide</a>
      <a className={s.pageRightSideMenuAnchor} href='#material_design'>Material Design font</a>
      <a className={s.pageRightSideMenuAnchor} href='#font_awesome'>Font Awesome</a>
      <a className={s.pageRightSideMenuAnchor} href='#cheat_sheet'>Cheat sheet</a>
    </div>
  </div>
)

export default uiColours
