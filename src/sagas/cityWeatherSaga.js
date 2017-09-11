import { all, call, put } from 'redux-saga/effects';
import api from '../api';

function* cityWeatherSaga(action) {
  try {
    const cities = yield all(action.cityNames.split(',').map(cityName => {
      return call(api.fetchCityWeather, cityName);
    }))
    yield put({type: 'FETCH_CITY_WEATHER_SUCCESSED', cities});
  } catch (error) {
    yield put({type: 'FETCH_CITY_WEATHER_FAILED'});
  }
}

export default cityWeatherSaga;
