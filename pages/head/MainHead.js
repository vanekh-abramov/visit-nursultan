import classes from "./MainHead.module.css";
import Image from "next/image";
import main_logo from "../../assets/img/main-logo.svg";
import Header from "../../components/header/Header";
import { cardsData } from './../../assets/data/cardsData';
import MainCard from './../../components/mainCard/MainCard';

const MainHead = () => {
  return (
    <>
      <Header />
      <div className={classes.main_head}>
        <Image
          className={classes.main_logo}
          src={main_logo}
          alt={"main_logo"}
          priority={true}
        />
        <div className={classes.main_card}>
          {cardsData.map(({ src, alt, title, subtitle }, id) => (
            <MainCard key={id} src={src} alt={alt} title={title} subtitle={subtitle} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainHead;
