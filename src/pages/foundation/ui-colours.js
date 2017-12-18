import _ from 'lodash';
import to from 'to-case';
import Color from 'color';
import classnames from 'classnames';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Breadcrumbs from '../../components/breadcrumbs';
import chartExample from './chart-example.png';

import {
  colours,
  themeColours,
  linkColour,
  grays
} from '../../library/bhp-ui/colours';

import {
  colours as darkThemeColours,
  grays as darkThemeGrays
} from '../../library/bhp-ui/colours/dark-theme';

import s from './ui-colours.module.scss';

const baseColoursToArray = (which, colours, codeFunction) => {
  return _.chain(which).map(groupName => {
    const slugName = to.slug(groupName);

    if (_.isArray(colours[groupName])) {
      return _.map(colours[groupName], (hex, index) => ({
        name: `${slugName}-${index + 1}`,
        code: `${codeFunction}('${slugName}-${index + 1}')`,
        hex
      }));
    } else {
      return [{
        name: slugName,
        code: `${codeFunction}('${slugName}')`,
        hex: colours[groupName]
      }];
    }
  }).flatten().value();
}

const coloursToArray = which => baseColoursToArray(which, colours, 'color');
const graysToArray = which => baseColoursToArray(which, grays, 'gray');
const themeColoursToArray = which => baseColoursToArray(which, themeColours, 'theme-color');
const darkThemeColoursToArray = which => baseColoursToArray(which, darkThemeColours, 'color');
const darkThemeGraysToArray = which => baseColoursToArray(which, darkThemeGrays, 'gray');

class FoundationUIColours extends React.Component {
  renderColourSection({ title, colours }) {
    return (
      <section>
        <div className='container'>
          <h4 className='h4-light'>{title}</h4>

          <div className='row'>
            {colours.map(({ name, code, hex }) => (
              <div
                key={name}
                className='col-12 col-sm-6 col-md-3'
              >
                <CopyToClipboard text={hex}>
                  <div
                    className={classnames(
                      'd-flex flex-column justify-content-center',
                      s.hexBox,
                      Color(hex).dark() && 'text-white',
                      Color(hex).luminosity() > 0.9 && 'border'
                    )}
                    style={{ backgroundColor: hex }}
                  >
                    <div className={s.copyMessage}>Click to copy</div>

                    <div>{hex}</div>
                  </div>
                </CopyToClipboard>

                <div className={s.codeBox}>
                  {code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  renderMixRow({ key, text, colours }) {
    return (
      <div
        key={key}
        className='d-flex flex-row mb-3'
      >
        <div className='d-flex flex-row'>
          {colours.map(([group, number]) =>
            <div
              key={`${group}-${number}`}
              className={s.colourMixBox}
              style={{ backgroundColor: themeColours[group][number] }}
            >
              {number + 1}
            </div>
          )}
        </div>

        <div className={s.colourMixText}>
          {text}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Breadcrumbs
          category='Foundation'
          slug='foundation/ui-colours'
          title='UI Colours'
        />

        <section>
          <div className='container'>
            <h3 className={s.pageHeader}>UI Colours</h3>

            <p>
              Our colour system includes seven distinct families, each consisting
              of four shades or groups. Whilst we have a broad range to select
              from, Orange 1 is the preferred colour family for digital and Apps
              and work with that colour’s range to ensure we do not have multiple
              colour families competing on the same page.
            </p>
          </div>
        </section>

        {this.renderColourSection({
          title: 'Type',
          colours: coloursToArray([
            'black',
            'offWhite'
          ]).concat([{
            name: 'linkColor',
            code: '$link-color',
            hex: linkColour
          }]).concat(themeColoursToArray([
            'primary'
          ]))
        })}

        {this.renderColourSection({
          title: 'Main theme',
          colours: themeColoursToArray([
            'bhpOrange',
            'success',
            'info',
            'warning',
            'danger'
          ])
        })}

        {this.renderColourSection({
          title: 'Light theme typography, backgrounds, headers and links',
          colours: graysToArray([
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
          ]).concat(coloursToArray([
            'darkRed',
            'blue'
          ]))
        })}

        {this.renderColourSection({
          title: 'Dark theme backgrounds and headers',
          colours: darkThemeGraysToArray([
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
          ]).concat(darkThemeColoursToArray([
            'blue',
            'white',
            'red'
          ]))
        })}

        {this.renderColourSection({
          title: 'Secondary themes',
          colours: themeColoursToArray([
            'bhpPurple',
            'bhpBlue',
            'bhpTurquoise',
            'bhpGreen',
            'bhpGrey'
          ])
        })}

        <section>
          <div className='container'>

            <h4 className='h4-light'>Colour combinations</h4>

            <p>
              If you use colour text on a full colour background then the
              background must be from group 1, and the text must be from either
              group 3 or 4 (of the same family), or white.
            </p>

            <p>
              Example:
            </p>

            <div className='container mb-3'>
              <div className='row'>
                <div className='col-md-6 pb-1 pr-1'>
                  <div className='p-4 text-bhp-turquoise-3 bg-bhp-turquoise-1 text-center'>
                    Background colour is bhp-turquoise-1 and text is
                    bhp-turquoise-3
                  </div>
                </div>

                <div className='col-md-6 pb-1 pl-1'>
                  <div className='p-4 text-bhp-purple-3 bg-bhp-purple-1 text-center'>
                    Background colour is bhp-purple-1 and text is
                    bhp-purple-3
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 pt-1 pr-1'>
                  <div className='p-4 text-bhp-blue-3 bg-bhp-blue-1 text-center'>
                    Background colour is bhp-blue-1 and text is
                    bhp-blue-3
                  </div>
                </div>

                <div className='col-md-6 pt-1 pl-1'>
                  <div className='p-4 text-bhp-grey-3 bg-bhp-grey-1 text-center'>
                    Background colour is bhp-grey-1 and text is
                    bhp-grey-3
                  </div>
                </div>
              </div>
            </div>

            <h4 className='h4-light'>Colours mix, charts and graphs</h4>

            <p>
              Do not mix the BHP Secondary colours together. Use Orange1 with all
              colour families to highlight key information in charts and graphs.
            </p>

            <div>
              {this.renderMixRow({
                text: 'main theme',
                colours: [
                  ['bhpOrange', 2],
                  ['bhpOrange', 0],
                  ['bhpOrange', 3],
                  ['bhpOrange', 1]
                ]
              })}
              {['Purple', 'Blue', 'Turquoise', 'Green', 'Grey'].map(which => this.renderMixRow({
                key: which,
                text: `${which.toLowerCase()} theme`,
                colours: [
                  [`bhp${which}`, 1],
                  ['bhpOrange', 0],
                  [`bhp${which}`, 0],
                  [`bhp${which}`, 2]
                ]
              }))}
            </div>

            <h5>Example</h5>

            <img
              style={{ maxWidth: '500px' }}
              src={chartExample}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default FoundationUIColours;