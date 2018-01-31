import React from 'react';
import PropTypes from 'prop-types';

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    let subscriptions = [];
    let nextListenerId = 0;
    this.themeSubscriber = {
      subscribe: cb => {
        const id = nextListenerId++;
        subscriptions.push({ id, cb });
        return id;
      },
      unsubscribe: id => {
        const index = subscriptions.findIndex(subscription => id == subscription.id);
        subscriptions.splice(index, 1);
      },
      broadcast: value => {
        subscriptions.forEach(subscription => subscription.cb(value));
      }
    };
  }

  getThemeFromName(themeName) {
    return this.props.themes.find(theme => theme.name == themeName);
  }

  componentWillReceiveProps(nextProps) {
    const { themeName } = nextProps;
    this.themeSubscriber.broadcast(this.getThemeFromName(themeName));
  }

  getChildContext() {
    const { themes, themeName } = this.props;
    return {
      themeSubscriber: this.themeSubscriber,
      // NOTE(mgnb): this is used for the initial render of components, but
      // in general cannot be relied upon
      theme: this.getThemeFromName(themeName),
      themes
    };
  }

  render() {
    return this.props.children;
  }
}

ThemeProvider.childContextTypes = {
  themeSubscriber: PropTypes.object,
  theme: PropTypes.object,
  themes: PropTypes.array
};

export default ThemeProvider;
