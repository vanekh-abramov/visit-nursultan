import classes from "./MainHead.module.css";
import Image from "next/image";
import main_logo from "../../assets/img/main-logo.svg";
import Header from "../../components/header/Header";
import card1 from "../../assets/img/card1.jpg";
import card2 from "../../assets/img/card2.jpg";
import card3 from "../../assets/img/card3.jpg";
import card4 from "../../assets/img/card4.jpg";

const MainHead = () => {
  return (
    <>
      <Header />
      <div className={classes.main_head}>
        <Image
          className={classes.main_logo}
          src={main_logo}
          alt={"main_logo"}
        />
        <div className={classes.main_card}>
          <div className={classes.card_item}>
            <div className={classes.hoverd_img}>
              <Image
                className={classes.card_img}
                width={130}
                src={card1}
                alt={"hotel"}
              />
            </div>
            <div className={classes.card_title}>
              <p className={classes.main_title}>Где остановиться?</p>
              <p className={classes.sup_title}>отели, хостелы...</p>
            </div>
          </div>
          <div className={classes.card_item}>
            <div className={classes.hoverd_img}>
              <Image
                className={classes.card_img}
                width={130}
                src={card2}
                alt={"hotel"}
              />
            </div>
            <div className={classes.card_title}>
              <p className={classes.main_title}>Где поесть?</p>
              <p className={classes.sup_title}>рестораны, кафе...</p>
            </div>
          </div>
          <div className={classes.card_item}>
            <div className={classes.hoverd_img}>
              <Image
                className={classes.card_img}
                width={130}
                src={card3}
                alt={"hotel"}
              />
            </div>
            <div className={classes.card_title}>
              <p className={classes.main_title}>Куда сходить?</p>
              <p className={classes.sup_title}>Театры, кино...</p>
            </div>
          </div>
          <div className={classes.card_item}>
            <div className={classes.hoverd_img}>
              <Image
                className={classes.card_img}
                width={130}
                src={card4}
                alt={"hotel"}
              />
            </div>
            <div className={classes.card_title}>
              <p className={classes.main_title}>Что посмотреть?</p>
              <p className={classes.sup_title}>Музеи, байтерек...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHead;
