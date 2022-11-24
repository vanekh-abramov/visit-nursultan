import classes from "./SliderSection.module.css";
import { Pagination, EffectFade, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import flamingos from "../../assets/img/flamingos.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image from "next/image";
import { Container } from "react-bootstrap";

const Slider = () => {
  const pagination = {
    el: ".my-custom-pagination-div",
    bulletClass: "bullet",
    bulletActiveClass: "bullet_active",
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <Swiper
      pagination={pagination}
      effect="fade"
      modules={[Pagination, EffectFade]}
      className={classes.my_swiper}
    >
      <Container>
        <div className={classes.swiper_inner_block}>
            <p className={classes.inner_block_top_title}>
              Отдых рядом с городом
            </p>
            <p className={classes.inner_block_title}>
              Коргалжынский заповедник
            </p>
            <p className={classes.inner_block_subtitle}>
              Коргалжынский государственный природный заповедник называют
              «жемчужиной края».
            </p>
            <button className={classes.inner_block_button}>
              Подробнее
            </button>
        </div>
      </Container>

      <SwiperSlide>
        <Image
          className={classes.swiper_img}
          src={flamingos}
          alt={"flamingos"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className={classes.swiper_img}
          src={flamingos}
          alt={"flamingos"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className={classes.swiper_img}
          src={flamingos}
          alt={"flamingos"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className={classes.swiper_img}
          src={flamingos}
          alt={"flamingos"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className={classes.swiper_img}
          src={flamingos}
          alt={"flamingos"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className={classes.swiper_img}
          src={flamingos}
          alt={"flamingos"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className={classes.swiper_img}
          src={flamingos}
          alt={"flamingos"}
        />
      </SwiperSlide>
      <div className="my-custom-pagination-div"></div>
    </Swiper>
  );
};

export default Slider;
