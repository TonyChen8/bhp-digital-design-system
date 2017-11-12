import React from 'react'
import s from './style.module.css'

const typography = () => (
  <div className='pageContainerGlobalClass'>
    <div className='pageMainContentGlobalClass'>
      <p className='pageTitleGlobalClass'>Typography</p>
      <p>Arial is BHP’s everyday font. As a system font, Arial ensures consistency when distributing files across workstations and platforms. Arial has been installed as our default across all desktop computers. If you require further details regarding this font for your agency/provider please contact your local Corporate Affairs team or email Corporate Brand.</p>
      <p>Most typographic styles are based off standard HTML, however classes are also available should you wish to apply the same styles to other elements.The default body text is 13px. For optimum reading length, the paragraph-width is capped at 694px.</p>
      <p>The default body text is 13px. For optimum reading length, the paragraph-width is capped at 694px.</p>
      <p>Tips: Too many type sizes and styles at once can disturb any layout. A typographic scale has a limited set of type sizes that work well together along with the layout grid. Avoid italic text as it impede the accessibility of your design.</p>
      <p>White text on dark backgrounds hould do so at an opacity of 100%.</p>

      <div className={s.foundationsTypography}>
        <div>
          <div className={s.lightThemeText}>Light theme</div>
          <h1>Heading 1</h1>
          <h2 className='bhpOrangeColorFontGlobalClass'>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
        </div>
        <div>
          <div className={s.darkThemeText}>Dark Theme</div>
          <div className='darkThemeGlobalClass'>
            <h1>Heading 1</h1>
            <h2 className='bhpOrangeColorFontGlobalClass'>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
          </div>
        </div>
      </div>
      <pre className='codeBlockGlobal'>{`
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
      `}</pre>
      Light theme<br />
      Body text large / <a className={s.pageAnchors}>Link text large</a>
      <p></p>
      <div className='darkThemeGlobalClass'>
        Variation Dark theme
        <br />
        Body text large / <a>Link text large</a>
      </div>
     
     
      <p>
        Body text / link text - this is the default text size - 13px/18px  #333333<br/>
        Note: Body text used in tables can be reduced to 11px in some cases.<br/>
        Lorem ipsum dolor sit amet, quando quodsi electram ei has, <strong>ne alii inermis neglegentur sea. An sea quodsi mentitum vivendum, ferri sadipscing pri ne.</strong>
      </p>

      <p>
        Small text - this is the default text size for notes, legal texts… - 11px/15px #979797 @50% opacity<br />
        Lorem ipsum dolor sit amet, quando quodsi electram ei has, ne alii inermis neglegentur sea. An sea quodsi mentitum vivendum, ferri sadipscing pri ne.
      </p>
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
      </table>

    </div>
    <div className='pageRightSideMenuGlobalClass'>
    </div>
  </div>
)

export default typography
