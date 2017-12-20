import React from 'react';
import classnames from 'classnames';

class MDIcon extends React.Component {
  render() {
    const { name, className, style, size } = this.props;

    const actualClassName = classnames(
      'material-icons', name, className,
    );
    const actualStyle = Object.assign({}, style || {}, size ? { fontSize: `${size}px` } : {});
    return (
      <i
        className={actualClassName}
        style={actualStyle}
      >
        {name}
      </i>
    );
  }
}

export default MDIcon;
