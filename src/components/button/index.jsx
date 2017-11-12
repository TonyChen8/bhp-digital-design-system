import classnames from 'classnames';
import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';


import s from './style.module.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = { copySuccess: '' }
  }

  copyToClipboard = (e) => {
    
    var textField = document.createElement('textarea')
    textField.innerText = this.props.backgroundColor
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    
    
    
    
    // this.textArea.select();
    // document.execCommand('copy');
    // // This is just personal preference.
    // // I prefer to not show the the whole text area selected.
    // e.target.focus();
    // this.setState({ copySuccess: 'Copied!' });
  };


  render() {

    return (
      <div>
        <button
          className={s.buttonClass}
          style={{backgroundColor: this.props.backgroundColor}}
          onClick={this.copyToClipboard}
        >
          {this.props.name}
        </button>
        <div>
          <input className={s.inputClass} type="text" value={this.props.buttonText} readonly />
        </div>
      </div>
    );
  }

}

export default Button;
