import classes from './MainCard.module.css'
import Image from 'next/image';

const MainCard = ({ src, alt, title, subtitle }) => {

  return (
    <div className={classes.card_item}>
      <div className={classes.hoverd_img}>
        <Image
          className={classes.card_img}
          width={130}
          src={src}
          alt={alt}
        />
      </div>
      <div className={classes.card_title}>
        <p className={classes.title}>{title}</p>
        <p className={classes.subtitle}>{subtitle}</p>
      </div>
    </div>
  )
}

export default MainCard