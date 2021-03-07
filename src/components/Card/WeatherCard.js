import React from 'react';
import './weatherCardStyle.css';
import {formatWeekDay, formatDate} from '../../helpers/timeHelper';


export const WeatherCard = ({el}) => {
  let weekdayName = formatWeekDay(el.dt);
  let weekdayDate = formatDate(el.dt);

  return (
    <div className="w-card">
        <div className="w-card_body">
          <span> {weekdayName} </span>
          <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt='icon'/>
          <h1 className='card_title'>
            Day {Math.round(el.temp.day)}&deg;C
          </h1>
          <span> {weekdayDate} </span>
        </div>
      </div>
  );
}