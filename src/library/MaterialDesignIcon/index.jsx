import React, {PropTypes} from 'react';
import classnames from 'classnames';
import 'material-design-icons/iconfont/material-icons.css';

const MaterialDesignIcon = React.createClass({

  propTypes: {
    name: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      fontSize: '18px',
      color: '#fff',
    };
  },

  render() {
    let className = classnames(
      'material-icons', this.props.name, this.props.className,
    );
    return (
      <i
        className={className}
        style={{
          color: this.props.color,
          fontSize: this.props.fontSize
        }}
      >
        {this.props.name}
      </i>
    );
  }
});

export default MaterialDesignIcon;
