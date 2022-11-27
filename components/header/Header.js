import classes from './Header.module.css';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import shopping_cart from '../../assets/img/shopping-cart.svg';
import glass from '../../assets/img/glass.svg';
import bar_chart from '../../assets/img/bar-chart.svg';
import { navData } from '../../assets/data/navData';
import NavButton from '../navButton/NavButton';
import { socialLinksData } from './../../assets/data/socialLinksData';
import SocialLink from '../socialLink/SocialLink';

const Header = () => {
  return (
    <header className={classes.header}>
      <Container className={classes.header_wrapper}>
        <div className={classes.header_logo}></div>
        <nav className={classes.header_navigation}>
          {navData.map(({ id, value, text }) => (
            <NavButton key={id} connect={id} value={value} text={text} />
          ))}
        </nav>
        <nav className={classes.header_social}>
          {socialLinksData.map(({ src, href }, id) => (
            <SocialLink key={id} src={src} href={href} />
          ))}
        </nav>
        <div className={classes.header_tools}>
          <Image
            className={classes.glass}
            src={glass}
            width={25}
            height={25}
            alt={'glass'}
          />
          <Image
            className={classes.bar_chart}
            src={bar_chart}
            width={25}
            height={25}
            alt={'bar_chart'}
          />
        </div>
        <div className={classes.header_basket}>
          <Image
            className={classes.shopping_cart}
            src={shopping_cart}
            width={30}
            height={30}
            alt={'shopping_cart'}
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
