import React from 'react';

class ComponentDisplay extends React.Component {

  render() {
    console.log('ComponentDisplay',this.props.reactCode);
    console.log('typeof',typeof this.props.reactCode);
    return this.props.reactCode;
  }

}

export default ComponentDisplay;
