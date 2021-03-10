import React, { useState, useEffect } from 'react';
import { Layout, CardList, ErrorMessage } from '../components/index';
import { Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../redux/actions';
import { formatDate, formatWeekDay } from '../helpers/timeHelper';
import {useQuery} from '../helpers/QueryString';


export const WeatherPage = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather);
  const [weekDay, setWeekDay] = useState(null);
  const [weekDayDate, setWeekDayDate] = useState(null);
  const query = useQuery();
  console.log(weatherData);
  
  useEffect(() => {
    dispatch(getWeather(query.lat, query.lon));
  }, [])

  useEffect(() => {
    if (!weatherData.errMessage && weatherData.weather.length) {
      setWeekDayDate(formatDate(weatherData.weather[0].dt))
      setWeekDay(formatWeekDay(weatherData.weather[0].dt))
    }
  }, [weatherData, weekDay, weekDayDate ])

  return(
    <div className="weather">
      <Layout>
        <div className="container">
          {
            weatherData.errMessage ?
              <ErrorMessage />
            :
            weatherData.loading ?
              <div className="spinner-wrap">
                <Spinner animation="border" variant="light" role="status" />
              </div>
            :
            (
              <div className='w-body'>
                <div className="w-body__top">
                  <Row>
                    <Col sm={6}>
                      <div className="w-list_left_wrap">
                        <ul className="w-left_content">
                          <li>
                            <span className="w-data_date"> {weekDayDate} {weekDay} </span>
                          </li>
                          <li>
                            <h2 className="w-data_temperature">Day {Math.round(weatherData.weather[0].temp.day)}&deg;C</h2>
                            <h3 className="w-data_temp-feels">Feels like  {Math.round(weatherData.weather[0].feels_like.day)}&deg;C</h3> 
                          </li>
                          <li>
                            <h4 className="w-data">Humidity -  {weatherData.weather[0].humidity} %</h4> 
                          </li>
                          <li>
                            <h4 className="w-data">Air Pressure -  {weatherData.weather[0].pressure} ps</h4> 
                          </li>
                          <li>
                            <h4 className="w-data">Wind Speed - {weatherData.weather[0].wind_speed} km/h</h4> 
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="city-name_wrap">
                        <h1 className="w-data_city-name"> {query.name} </h1>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="w-body__bottom">
                  <CardList data={weatherData.weather} />
                </div>
              </div>
            )
          }
        </div>
      </Layout>
    </div>
  );
}