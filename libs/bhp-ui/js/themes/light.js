import bhpColours from './bhp-colours';

const themeColours = Object.assign(bhpColours, {
  primary: bhpColours.bhpOrange[0],
  success: bhpColours.bhpGreen[1],
  info: bhpColours.bhpBlue[2],
  warning: '#fce05b',
  danger: '#f03a36'
});

const colours = {
  black: '#333333',
  blue: bhpColours.bhpBlue[2],
  darkRed: '#ac3d12',
  offWhite: '#fcfcfc'
};

const grays = {
  '100': '#f9f9f9',
  '200': '#f3f3f3',
  '300': '#ececec',
  '400': '#dddddd',
  '500': '#a5a5a5',
  '600': '#7e7e7e',
  '700': '#4a4a4a',
  '800': '#2A2D33',
  '900': '#212529',
};

const linkColour = themeColours.bhpBlue[2];

export default {
  colours,
  themeColours,
  linkColour,
  grays
};
