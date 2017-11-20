import React from 'react';
import MaterialDesignIcon from '../../library/MaterialDesignIcon';


import s from './style.module.css';

const Alert = React.createClass({
  // propTypes: {
  //   name: PropTypes.string,
  //   color: PropTypes.string,
  //   fontSize: PropTypes.string,
  // },
  
  getDefaultProps: function() {
    return {
      width: '672px',
      height: '60px'
    };
  },
  

  render() {
    var ALERT_ICONS = {
      primary: 'location_on',
      success: 'thumb_up',
      info: 'info',
      attention: 'notifications',
      danger: 'warning'
    };
    
    var ALERT_COLORS = {
      primary: '#e65400',
      success: '#01ab8b',
      info: '#2da3d7',
      attention: '#fcc05b',
      danger: '#f03a36'
    };
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: ALERT_COLORS[this.props.type],
          width: this.props.width,
          height: this.props.height,
          padding: '20px',
          color: '#fff'
        }}
        className='alertContainer'
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <MaterialDesignIcon name={ALERT_ICONS[this.props.type]} className='materialDesignIcon' />
          &nbsp;&nbsp;
          <p
            style={{
              color: '#fff',
            }}
            className='alertContainerText'>{this.props.text}</p>
        </div>
        <MaterialDesignIcon name='close' className='materialDesignIcon' />
      </div>
    );
  }

});

export default Alert;
