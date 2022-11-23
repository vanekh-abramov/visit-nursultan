import classes from "./Header.module.css";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Image from "next/image";
import instagram from "../../assets/img/instagram.svg";
import facebook from "../../assets/img/facebook.svg";
import youtube from "../../assets/img/youtube.svg";
import shopping_cart from "../../assets/img/shopping-cart.svg";
import glass from "../../assets/img/glass.svg";
import bar_chart from "../../assets/img/bar-chart.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <Container className={classes.header_wrapper}>
        <div className={classes.header_logo}></div>
        <nav className={classes.header_navigation}>
          <input
            className={classes.toggle_input}
            type="radio"
            id="contactChoice1"
            name="contact"
            value="email"
          />
          <label className={classes.toggle_button} for="contactChoice1">
            Tourism
          </label>

          <input
            className={classes.toggle_input}
            type="radio"
            id="contactChoice2"
            name="contact"
            value="phone"
          />
          <label className={classes.toggle_button} for="contactChoice2">
            Invest
          </label>

          <input
            className={classes.toggle_input}
            type="radio"
            id="contactChoice3"
            name="contact"
            value="mail"
          />
          <label className={classes.toggle_button} for="contactChoice3">
            Convention Bureau
          </label>
        </nav>
        <nav className={classes.header_social}>
          <Link className={classes.social_link} href={"#"}>
            {" "}
            <Image src={instagram} alt="instagram" width={21} height={21} />
          </Link>
          <Link className={classes.social_link} href={"#"}>
            {" "}
            <Image src={facebook} alt="facebook" width={21} height={21} />
          </Link>
          <Link className={classes.social_link} href={"#"}>
            {" "}
            <Image src={youtube} alt="youtube" width={21} height={21} />
          </Link>
        </nav>
        <div className={classes.header_tools}>
          <Image
            className={classes.glass}
            src={glass}
            width={25}
            height={25}
            alt={"glass"}
          />
          <Image
            className={classes.bar_chart}
            src={bar_chart}
            width={25}
            height={25}
            alt={"bar_chart"}
          />
        </div>
        <div className={classes.header_basket}>
          <Image
            className={classes.shopping_cart}
            src={shopping_cart}
            width={30}
            height={30}
            alt={"shopping_cart"}
          />
          <div className={classes.basket_items}>
            <p className={classes.basket_title}>КОРЗИНА</p>
            <p className={classes.basket_count}>0 тг.</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
