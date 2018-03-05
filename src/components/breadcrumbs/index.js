import React from 'react';
import Link from 'gatsby-link';
import s from './style.module.scss';

export default ({ category, slug, title }) => {
  return (
      
    <div className={s.breadcrumbs}>
    <div className="container">
      <Link to='/'>Home</Link>
      {' / '}
      {category &&
        <span>
          {category}
          {' / '}
        </span>
      }
      <Link to={slug}>{title}</Link>
    </div>
    </div>
  );
};
