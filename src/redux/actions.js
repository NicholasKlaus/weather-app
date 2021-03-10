import axios from 'axios';
import { WEATHER_DATA_FAILER, WEATHER_DATA_SUCCESS } from './type';
import { REACT_APP_API_KEY, REACT_APP_API_URL } from '../constants/index';

const weatherDataSuccess = (data) => {
  return {
    type: WEATHER_DATA_SUCCESS, 
    payload: data
  }
}

const weatherDataFailer = () => {
  return {
    type: WEATHER_DATA_FAILER
  }
}

export const getWeather = (lat, lon) => (dispatch) => {
  const url = `${REACT_APP_API_URL}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly&appid=${REACT_APP_API_KEY}`;
  axios.get(url)
  .then(({data}) => dispatch(weatherDataSuccess(data.daily)))
  .catch(err => {
    dispatch(weatherDataFailer())
  });
}