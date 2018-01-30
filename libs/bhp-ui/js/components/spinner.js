import classnames from 'classnames';
import React from 'react';

const Spinner = props => {
  const { color, size, ...otherProps } = props;

  return (
    <div
      className={classnames(
        'spinner',
        color && `spinner-${color}`,
        size && `spinner-${size}`
      )}
      {...otherProps}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
