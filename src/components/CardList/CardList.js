import React from 'react';
import { WeatherCard, WeatherSlider } from '../index';

export const CardList = ({data}) => {
  
  return(
    <div className="card-list">
      <WeatherSlider>
        {
          data.map((el, key) => {
            return (
              <WeatherCard el={el} key={key} />
            );
          })
        }
      </WeatherSlider>
  </div>
  );
}