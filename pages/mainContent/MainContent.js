import classes from "./MainContent.module.css";
import Link from "next/link";
import reason1 from "../../assets/img/reason1.jpg";
import reason2 from "../../assets/img/reason2.jpg";
import reason3 from "../../assets/img/reason3.jpg";
import reason4 from "../../assets/img/reason4.jpg";
import reason5 from "../../assets/img/reason5.jpg";
import reason6 from "../../assets/img/reason6.jpg";
import MainCards from './../../components/mainCards/MainCards';
import { useEffect } from "react";

const MainContent = () => {
  // const windWidth = window.document.documentElement.clientWidth
  useEffect(()=> {
        console.log(window.innerHeight, window.innerWidth)
 }, [])

  return (
    <div className={classes.content_wrapper}>
      <div className={classes.content_title_block}>
        <div className={classes.title_block}>
          <p className={classes.section_name}>#Nur-Sultan</p>
          <p className={classes.section_subname}>6 причин посетить город</p>
        </div>
        <div className={classes.content_additional}>
          <Link href={"#"} className={classes.content_link}>
            Подробнее
          </Link>
        </div>
      </div>
      <div className={classes.content_cards_block}>
        <div className={classes.cards_block}>
          <MainCards direction={'column'} image_src={reason1} card_title={'Достопримечательности'} card_subtitle={'Футуристический город посреди степи — левый берег, олицетворяющий техногенное будущее.'} />
          <MainCards direction={'column'} image_src={reason2} card_title={'Гостеприимство'} card_subtitle={'Если вы заблудились, местные никогда не откажут в помощи. Дружелюбие казахов не знает границ'} />
        </div>
        <div className={classes.cards_block}>
          <MainCards direction={'column-reverse'} image_src={reason3} card_title={'Самый большой шатёр в мире'} card_subtitle={'ТРЦ Хан Шатыр является первым и единственным лайфстайл-центром, который объединяет шопинг и развлечения мирового уровня под одной крышей.'} />
          <MainCards direction={'column'} image_src={reason4} card_title={'Самая большая опера'} card_subtitle={'Своим величием он поразил немало туристов, а внутри здание украшено еще лучше, чем снаружи.'} />
        </div>
        <div className={classes.cards_block}>
          <MainCards direction={'column'} image_src={reason5} card_title={'Уникальная архитектура'} card_subtitle={'Самая молодая и динамично развивающаяся столица стран СНГ. Возможно, именно поэтому архитектура города столь необычна и поразительна.'} />
          <MainCards direction={'column'} image_src={reason6} card_title={'Люди'} card_subtitle={'Несмотря на климат столицы, люди в городе очень добрые и всегда готовы прийти на помощь.'} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
