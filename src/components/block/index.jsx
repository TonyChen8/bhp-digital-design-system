import classnames from 'classnames';
import React from 'react';


import s from './style.module.css';

class Block extends React.Component {

  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.backgroundColor,
          width: this.props.width,
          minHeight: this.props.height,
          maxWidth: '50%',
          marginBottom: '15px'
        }}
        className={s.block}
      >
        <p className={s.blockText}>{this.props.text}</p>
      </div>
    );
  }

}

export default Block;
