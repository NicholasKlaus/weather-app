import React from "react";
import Slider from "react-slick";
import "./sliderStyle.css";
import { sliderConfig } from "../../constants/sliderConfig";

export const WeatherSlider = ({ children, config}) => {
  const settings = {
    ...sliderConfig,
    ...config
  };

  return (
      <Slider {...settings}>
        { children }
      </Slider>
  )
}