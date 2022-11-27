import React from 'react';
import classes from './SubHead.module.css';
import Image from 'next/image';
import ship from '../../assets/img/ship.svg';
import bottom_logo from '../../assets/img/bottom-logo.jpg';
import { famousItemData } from './../../assets/data/famousItemData';
import FamousItem from './../../components/famousItem/FamousItem';

const SubHead = () => {
  return (
    <div className={classes.subhead_wrapper}>
      <Image className={classes.ship} src={ship} alt={'ship'} />
      <div className={classes.ifo_block}>
        <h1 className={classes.block_title}>Добро пожаловать в Нур-Султан</h1>
        <p className={classes.info_text}>
          <span className={classes.span}>Нур-Султан</span> - столица
          независимого Казахстана. Это молодой, современный, комфортный
          и динамичный город в котором каждый человек почувствует
          гостеприимность и радушие столицы.
        </p>
        <div className={classes.numbers_block}>
          {famousItemData.map(({ total, title }, id) => (
            <FamousItem key={id} total={total} title={title} />
          ))}
        </div>
      </div>
      <Image
        className={classes.bottom_logo}
        src={bottom_logo}
        alt={'bottom_logo'}
      />
    </div>
  );
};

export default SubHead;
