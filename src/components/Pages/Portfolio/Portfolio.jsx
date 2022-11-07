import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import madrid from "../../../img/madrid.png";
import Ecommerce from "../../../img/ecommerce.png";
import HOC from "../../../img/hoc.png";
import MusicApp from "../../../img/musicapp.png";
import { themeContext } from "../../../contexts/Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider" >
        <SwiperSlide>
          <img src={madrid} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
