import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from './theme-provider';

class ThemeManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { themeName: props.initialThemeName };
  }

  getChildContext() {
    return {
      selectTheme: newThemeName => {
        this.setState({ themeName: newThemeName });
      }
    };
  }

  render() {
    const { children, themes } = this.props;
    const { themeName } = this.state;
    return (
      <ThemeProvider
        themeName={themeName}
        themes={themes}
      >
        {children}
      </ThemeProvider>
    );
  }
}

ThemeManager.childContextTypes = {
  selectTheme: PropTypes.func
};

export default ThemeManager;
