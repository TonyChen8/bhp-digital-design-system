import React from 'react'
import s from './style.module.css';
import classnames from 'classnames';
import Highlight from 'react-highlight';


const typography = () => (
  <div className='pageContainerGlobalClass'>
    <div className='pageMainContentGlobalClass'>
      <div className='pageTitleGlobalClass'>
        <h3>Typography</h3>
      </div>

      <div className={s.pageSection}>
        <p>
          Arial is BHP's everyday font. As a system font, Arial ensures
          consistency when distributing files across workstations and platforms.
          Arial has been installed as our default across all desktop computers.
          If you require further details regarding this font for your
          agency/provider please contact your local Corporate Affairs team or
          email Corporate Brand.
        </p>
        <p>
          The font Graphik Web is accepted as the secondary option for some
          designs. Its use and styling similarly follows the primary font,
          Arial. Typical use would be for emphasis, special design or captions.
        </p>
        <p>
          The default body text is 13px. Line height is 1.25 for headings and 1.5 for body, notes and small texts.
          For optimum reading length, the paragraph-width is capped at 694px.
        </p>
        <p>
          Tips: Too many type sizes and styles at once can disturb any layout. A
          typographic scale has a limited set of type sizes that work well
          together along with the layout grid. Avoid italic text as it impede the
          accessibility of your design.
        </p>
        <p>
          White text on dark backgrounds should do so at an opacity of 100%.
        </p>
      </div>

      <div className={s.pageSection}>
        <div className={s.headingsTable}>
          <div>
            <h4 className={classnames('alternate4', s.headingsTableHeader)}>Light theme</h4>

            <div className={s.headingsTableContainer}>
              <h1>Heading 1, bold 42</h1>
              <h2 className='bhpOrange'>Heading 2, bold 32</h2>
              <h3>Heading 3, bold 30</h3>
              <h4>Heading 4, bold 22</h4>
              <h4 className='alternate4'>Heading 4 alternate, 20</h4>
              <span className={s.h5Text}><h5>Heading 5</h5>, bold 14 uppercase</span>
            </div>
          </div>

          <div>
            <h4 className={classnames('alternate4', s.headingsTableHeader)}>Dark Theme</h4>

            <div className={classnames(s.headingsTableContainer, 'darkTheme', 'deepInset')}>
              <h1>Heading 1</h1>
              <h2 className='bhpOrange'>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h4 className='alternate4'>Heading 4 alternate, 20</h4>
              <h5>Heading 5</h5>
            </div>
          </div>
        </div>

        <div className={s.headingsTableCodeHighlights}>
          <pre className='codeHighlight'>
  {`<h1>Heading 1</h1>
<h2 class="bhpOrange">Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h4 className='alternate4'>Heading 4 alternate</h4>
<h5>Heading 5</h5>`}
          </pre>
          <pre className='codeHighlight'>
  {`<div class="darkTheme">
  <h1>Heading 1</h1>
  <h2 class="bhpOrange">Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h4 className='alternate4'>Heading 4 alternate</h4>
  <h5>Heading 5</h5>
</div>`}
          </pre>
        </div>
      </div>

      <div className={s.pageSection}>
        <p className='largeText'>
          Light theme<br />
          Body text large / <a href="#">Link text large</a>
        </p>

        <p className={classnames('largeText', 'darkTheme', 'shallowInset')}>
          Variation Dark theme<br />
          Body text large / <a href="#">Link text large</a>
        </p>
        <pre className='codeHighlight'>
{`<p class="largeText">
  Light theme<br />
  Body text large / <a href="#">Link text large</a>
</p>

<p class="largeText darkTheme shallowInset">
  Variation Dark theme<br />
  Body text large / <a href="#">Link text large</a>
</p>`}
        </pre>
      </div>

      <div className={s.pageSection}>
        <p>
          Body text / <a href="#">link text</a> - this is the default text size - 13px/18px #333333<br/>
          Note: Body text used in tables can be reduced to 11px in some cases.<br/>
        </p>

        <pre className='codeHighlight'>
{`<p>
  Body text / <a href="#">link text</a> - this is the default text size - 13px/18px  #333333<br/>
  Note: Body text used in tables can be reduced to 11px in some cases.<br/>
</p>`}
        </pre>
      </div>

      <div className={s.pageSection}>
        <p className='smallText'>
          Small text - this is the default text size for notes, legal texts... - 11px/15px #979797 @50% opacity<br />
          Lorem ipsum dolor sit amet, quando quodsi electram ei has, ne alii inermis neglegentur sea. <strong>An sea quodsi mentitum vivendum, ferri sadipscing pri ne.</strong>
        </p>


        <pre className='codeHighlight'>
{`<p className='smallText'>
  Small text - this is the default text size for notes, legal texts... - 11px/15px #979797 @50% opacity<br />
  Lorem ipsum dolor sit amet, quando quodsi electram ei has, ne alii inermis neglegentur sea. <strong>An sea quodsi mentitum vivendum, ferri sadipscing pri ne.</strong>
</p>`}
        </pre>
      </div>

      <div className={s.pageSection}>
        <h4>Text colours</h4>

        <p>Texts will be generally use four colours variations.</p>

        <table className={s.textColourTable}>
          <tr>
            <td>Default colour</td>
            <td>#333333</td>
          </tr>

          <tr className='bhpOrange'>
            <td>Primary colour</td>
            <td>#E65400</td>
          </tr>

          <tr className='bhpOrangeNegative'>
            <td>Negative colour</td>
            <td>#FFFFFF</td>
          </tr>

          <tr className='disabledColour'>
            <td>Notes/Disabled colour</td>
            <td>#333333 @50% opacity</td>
          </tr>
        </table>

        <pre className='codeHighlight'>
{`<table>
  <tr>
    <td>Default colour</td>
    <td>#333333</td>
  </tr>
  <tr class="bhpOrange">
    <td>Primary colour</td>
    <td>#E65400</td>
  </tr>
  <tr class="bhpOrangeNegative">
    <td>Negative colour</td>
    <td>#FFFFFF</td>
  </tr>
  <tr class="disabledColour">
    <td>Notes/Disabled colour</td>
    <td>#333333 @50% opacity</td>
  </tr>
</table>`}
        </pre>
      </div>
    </div>
  </div>
)

export default typography
