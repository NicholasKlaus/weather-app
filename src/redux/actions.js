import { WEATHER_DATA_FAILER, WEATHER_DATA_SUCCESS } from './type';

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

const {REACT_APP_API_KEY, REACT_APP_API_URL} = process.env;
const url = `${REACT_APP_API_URL}onecall?lat=48.547222&lon=22.986389&units=metric&exclude=current,minutely,hourly&appid=${REACT_APP_API_KEY}`;

export const getWeather = () => (dispatch) => {
  fetch(url)
  .then(res => res.json())
  .then(res => dispatch(weatherDataSuccess(res.daily)))
  .catch(err => {
    dispatch(weatherDataFailer())
  });
}