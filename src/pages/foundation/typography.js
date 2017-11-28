import React from 'react'
import s from './style.module.css';
import classnames from 'classnames';
import Highlight from 'react-highlight';


const typography = () => (
  <div className='pageContainerGlobalClass'>
    <div className='pageMainContentGlobalClass'>
      <p className='pageTitleGlobalClass'>Typography</p>
      <p>Arial is BHP’s everyday font. As a system font, Arial ensures consistency when distributing files across workstations and platforms. Arial has been installed as our default across all desktop computers. If you require further details regarding this font for your agency/provider please contact your local Corporate Affairs team or email Corporate Brand.</p>
      <p>The font Graphik Web is accepted as the secondary option for some designs. Its use and styling similarly follows the primary font,  Arial. Typical use would be for emphasis, special design or captions.</p>
      <p>The default body text is 13px. For optimum reading length, the paragraph-width is capped at 694px.</p>
      <p>Tips: Too many type sizes and styles at once can disturb any layout. A typographic scale has a limited set of type sizes that work well together along with the layout grid. Avoid italic text as it impede the accessibility of your design.</p>
      <p>White text on dark backgrounds should do so at an opacity of 100%.</p>
      <br />

      <div className={s.foundationsTypography}>
        <div>
          <div className={s.lightThemeText}>Light theme</div>
          <h1>Heading 1, bold 42</h1>
          <h2 className='bhpOrangeColorFontGlobalClass'>Heading 2, bold 32</h2>
          <h3>Heading 3, bold 30</h3>
          <h4>Heading 4, bold 22</h4>
          <span className={s.h5Text}><h5>Heading 5</h5>, bold 14 uppercase</span>
        </div>
        <div>
          <div className={s.darkThemeText}>Dark Theme</div>
          <div className={s.darkThemeHeading}>
            <h1>Heading 1</h1>
            <h2 className='bhpOrangeColorFontGlobalClass'>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
          </div>
        </div>
      </div>
      <br />
      <br />
      <pre className={classnames('html','highlightGlobalClass')}>
{`
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>`
}
      </pre>
      <div className={s.lightTheme}>
        Light theme<br />
        Body text large / <a className={s.pageAnchors}>Link text large</a>
        <br />
        <br />

        <div className={s.darkThemeVariation}>
          Variation Dark theme
          <br />
          Body text large / <a>Link text large</a>
        </div>
      </div>

     <br />
      <br />

     
      <p>
        Body text / link text - this is the default text size - 13px/18px  #333333<br/>
        Note: Body text used in tables can be reduced to 11px in some cases.<br/>
      </p>
      <br />
<br />


      <p className={s.opacityClass}>
        Small text - this is the default text size for notes, legal texts… - 11px/15px #979797 @50% opacity<br />
        Lorem ipsum dolor sit amet, quando quodsi electram ei has, ne alii inermis neglegentur sea. <strong>An sea quodsi mentitum vivendum, ferri sadipscing pri ne.</strong>
      </p>
      <br />
<br />

      <p className='subTitleGlobalClass'>Text colours</p>
      <p>Texts will be generaly use four colours variations.</p>
      <table className={s.typographyTable}>
        <tr>
          <td>Default colour</td>
          <td>#333333</td>
          <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
        </tr>
        <tr className='bhpOrangeColorFontGlobalClass'>
          <td>Primary colour</td>
          <td>#E65400</td>
          <td></td>
        </tr>
        <tr className='bhpOrangeColorBackgroundGlobalClass'>
          <td className={s.paddingClass}>Negative colour</td>
          <td>#FFFFFF</td>
          <td></td>
        </tr>
        <tr className={s.opacityClass}>
          <td className={s.paddingClass}>Notes/Disabled colour</td>
          <td>#333333 @50% opacity </td>
          <td></td>
        </tr>
      </table>

    </div>
    <div className={classnames('pageRightSideMenuGlobalClass', 'noBorderLeftGlobalClass')}>
    </div>
  </div>
)

export default typography
