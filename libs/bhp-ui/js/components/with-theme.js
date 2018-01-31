import React from 'react';
import PropTypes from 'prop-types';
import hoistStatics from 'hoist-non-react-statics';

const withTheme = Component => {
  class C extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      this.subscriptionId = this.context.themeSubscriber.subscribe(theme => {
        return(this.setState({ theme }))
      });
    }

    componentWillUnmount() {
      this.context.themeSubscriber.unsubscribe(this.subscriptionId);
    }

    render() {
      const { wrappedComponentRef, ...remainingProps } = this.props;
      const { theme: stateTheme } = this.state;
      const { theme: contextTheme, themes, selectTheme } = this.context;
      return (
        <Component
          {...remainingProps}
          theme={stateTheme || contextTheme}
          themes={themes}
          selectTheme={selectTheme}
          ref={wrappedComponentRef}
        />
      );
    }
  }

  C.displayName = `withTheme(${Component.displayName || Component.name})`;
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: PropTypes.func
  };
  C.contextTypes = {
    themeSubscriber: PropTypes.object,
    theme: PropTypes.object,
    themes: PropTypes.array,
    selectTheme: PropTypes.func
  };

  return hoistStatics(C, Component);
};

export default withTheme;
