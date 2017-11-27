import classnames from 'classnames';
import React from 'react';


import s from './style.module.css';

class Block extends React.Component {
  
  getDefaultProps = () => {
    return {
      textColor: '#fff',
      marginRight: '0'
    };
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.backgroundColor,
          width: this.props.width,
          minHeight: this.props.height,
          marginBottom: '15px',
          marginRight: this.props.marginRight
        }}
        className={s.block}
      >
        <p
          className={s.blockText}
          style={{
            color: this.props.textColor,
          }}
        >{this.props.text}</p>
      </div>
    );
  }

}

export default Block;
