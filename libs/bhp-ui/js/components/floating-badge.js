import classnames from 'classnames';
import React from 'react';
import { Badge } from 'reactstrap';

const FloatingBadge = ({ className, children, ...otherProps }) => (
  <Badge
    className={classnames('floating-badge', className)}
    {...otherProps}
  >
    {children}
  </Badge>
);

const FloatingBadgeOuter = ({ className, children, ...otherProps }) => (
  <div
    className={classnames('floating-badge-outer', className)}
    {...otherProps}
  >
    {children}
  </div>
);

export {
  FloatingBadge,
  FloatingBadgeOuter
};
