
import Image from 'next/image';
import classes from './MainCards.module.css'

const MainCards = ({ image_src, card_title, card_subtitle, direction }) => {
  return (
    <div className={classes.card_1} style={{flexDirection: direction}}>
      <Image priority className={classes.card_img} src={image_src} alt={`"${image_src}"`} />
      <div className={classes.card_text}>
        <p className={classes.card_title}>{card_title}</p>
        <p className={classes.card_subtitle}>
          {card_subtitle}
        </p>
      </div>
    </div>
  )
}

export default MainCards