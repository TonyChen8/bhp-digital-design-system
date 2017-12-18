import React from 'react';
import classnames from 'classnames';

// NOTE(mgnb): expects the material icons CSS to be imported globally

class MDIcon extends React.Component {
  render() {
    let className = classnames(
      'material-icons', this.props.name, this.props.className,
    );
    return (
      <i
        className={className}
        style={this.props.style}
      >
        {this.props.name}
      </i>
    );
  }
}

export default MDIcon;
