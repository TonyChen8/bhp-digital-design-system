import classnames from 'classnames';
import React from 'react';

const ToggleSwitch = props => {
  const { color, on, onMessage, offMessage, ...otherProps } = props;

  return (
    <div
      className={classnames(
        'toggle-switch',
        color && `toggle-switch-${color}`,
        on && `toggle-switch-on`
      )}
      {...otherProps}
    >
      <div className='toggle-switch-message-on'>{onMessage || 'YES'}</div>
      <div className='toggle-switch-toggler' />
      <div className='toggle-switch-message-off'>{offMessage || 'NO'}</div>
    </div>
  );
};

export default ToggleSwitch;
