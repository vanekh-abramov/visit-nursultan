import React from "react";
import classes from "./SubHead.module.css";
import Image from "next/image";
import ship from "../../assets/img/ship.svg";
import bottom_logo from "../../assets/img/bottom-logo.jpg";

const SubHead = () => {
  return (
    <div className={classes.subhead_wrapper}>
      <Image className={classes.ship} src={ship} alt={"ship"} />
      <div className={classes.ifo_block}>
        <h1 className={classes.block_title}>Добро пожаловать в Нур-Султан</h1>
        <p className={classes.info_text}>
          <span className={classes.span}>Нур-Султан</span> - столица независимого Казахстана. Это молодой,
          современный, комфортный и динамичный город в котором каждый человек
          почувствует гостеприимность и радушие столицы.{" "}
        </p>
        <div className={classes.numbers_block}>
          <div className={classes.number_item}>
            <div className={classes.number}>500+</div>
            <p className={classes.number_subtitle}>достопримечательностей</p>
          </div>
          <div className={classes.number_item}>
            <div className={classes.number}>2435+</div>
            <p className={classes.number_subtitle}>объектов питания</p>
          </div>
          <div className={classes.number_item}>
            <div className={classes.number}>2000+</div>
            <p className={classes.number_subtitle}>доступных мероприятий</p>
          </div>
        </div>
      </div>
      <Image className={classes.bottom_logo} src={bottom_logo} alt={'bottom_logo'} />
    </div>
  );
};

export default SubHead;
