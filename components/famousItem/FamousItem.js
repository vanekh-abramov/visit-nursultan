import React from 'react';
import classes from './FamousItem.module.css';

const FamousItem = ({ total, title }) => {
  return (
    <div className={classes.number_item}>
      <div className={classes.number}>{total}+</div>
      <p className={classes.number_subtitle}>{title}</p>
    </div>
  );
};

export default FamousItem;
