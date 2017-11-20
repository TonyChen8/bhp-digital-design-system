import React from 'react';
import s from './style.module.css'

class ComponentDisplay extends React.Component {

  render() {
    return (
      <div>
        <div className={s.elementContainer} dangerouslySetInnerHTML={{__html: this.props.reactCode}}></div> ;
      </div>
    );
   
  }

}

export default ComponentDisplay;
