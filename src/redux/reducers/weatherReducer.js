import { WEATHER_DATA_SUCCESS, WEATHER_DATA_FAILER } from "../type";

const initialState = {
  weather: [],
  loading: true,
  errMessage: false
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_DATA_SUCCESS :
      return {
        weather: action.payload,
        loading: false
      }
    case WEATHER_DATA_FAILER :
      return {
        loading: false,
        errMessage: true
      }
    default: return state;
  }
}