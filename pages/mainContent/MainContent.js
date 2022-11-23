import classes from "./MainContent.module.css";
import Link from "next/link";
import Image from "next/image";
import reason1 from "../../assets/img/reason1.jpg";
import reason2 from "../../assets/img/reason2.jpg";
import reason3 from "../../assets/img/reason3.jpg";
import reason4 from "../../assets/img/reason4.jpg";
import reason5 from "../../assets/img/reason5.jpg";
import reason6 from "../../assets/img/reason6.jpg";

const MainContent = () => {
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
          <div className={classes.card_1}>
            <Image className={classes.card_img} src={reason1} alt={"reason1"} />
            <div className={classes.card_text}>
              <p className={classes.card_title}>Достопримечательности</p>
              <p className={classes.card_subtitle}>
                Футуристический город посреди степи — левый берег,
                олицетворяющий техногенное будущее.
              </p>
            </div>
          </div>
          <div className={classes.card_1}>
            <Image className={classes.card_img} src={reason2} alt={"reason2"} />
            <div className={classes.card_text}>
              <p className={classes.card_title}>Гостеприимство</p>
              <p className={classes.card_subtitle}>
                Если вы заблудились, местные никогда не откажут в помощи.
                Дружелюбие казахов не знает границ.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.cards_block}>
          <div className={classes.card_1}>
            <div className={classes.card_text}>
              <p className={classes.card_title}>Самый большой шатёр в мире</p>
              <p className={classes.card_subtitle}>
                ТРЦ Хан Шатыр является первым и единственным лайфстайл-центром,
                который объединяет шопинг и развлечения мирового уровня под
                одной крышей.
              </p>
            </div>
            <Image className={classes.card_img} src={reason3} alt={"reason3"} />
          </div>
          <div className={classes.card_1}>
            <Image className={classes.card_img} src={reason4} alt={"reason4"} />
            <div className={classes.card_text}>
              <p className={classes.card_title}>Самая большая опера</p>
              <p className={classes.card_subtitle}>
                Своим величием он поразил немало туристов, а внутри здание
                украшено еще лучше, чем снаружи.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.cards_block}>
          <div className={classes.card_1}>
            <Image className={classes.card_img} src={reason5} alt={"reason5"} />
            <div className={classes.card_text}>
              <p className={classes.card_title}>Уникальная архитектура</p>
              <p className={classes.card_subtitle}>
                Самая молодая и динамично развивающаяся столица стран СНГ.
                Возможно, именно поэтому архитектура города столь необычна
                и поразительна.
              </p>
            </div>
          </div>
          <div className={classes.card_1}>
            <Image className={classes.card_img} src={reason6} alt={"reason6"} />
            <div className={classes.card_text}>
              <p className={classes.card_title}>Люди</p>
              <p className={classes.card_subtitle}>
                Несмотря на климат столицы, люди в городе очень добрые и всегда
                готовы прийти на помощь.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
