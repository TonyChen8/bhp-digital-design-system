import classnames from 'classnames';
import React from 'react';
import { Collapse } from 'react-collapse';

const Accordion = ({ className, children, ...otherProps }) => (
  <div
    className={classnames('accordion', className)}
    {...otherProps}
  >
    {children}
  </div>
);

const AccordionItem = ({ className, children, ...otherProps }) => (
  <div
    className={classnames('accordion-item', className)}
    {...otherProps}
  >
    {children}
  </div>
);

const AccordionItemHeader = ({ isOpen, className, children, withArrow, ...otherProps }) => (
  <div
    className={classnames('accordion-item-header', className)}
    {...otherProps}
  >
    {withArrow &&
      <i className='accordion-item-header-arrow material-icons md-18 align-middle'>{isOpen
        ? 'keyboard_arrow_down'
        : 'keyboard_arrow_right'
      }</i>
    }
    {children}
  </div>
);


const AccordionItemBody = ({ isOpen, className, children, ...otherProps }) => (
  <Collapse isOpened={isOpen}>
    <div
      className={classnames('accordion-item-body', className)}
      {...otherProps}
    >
      {children}
    </div>
  </Collapse>
);

export {
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemBody
};
