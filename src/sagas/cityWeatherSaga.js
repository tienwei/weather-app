import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../api';

function * fetchCityWeather(action) {
  try {
    const cities = yield action.cityNames.split(',').map(cityName => {
      return call(api.fetchCityWeather, cityName);
    })
    yield put({type: 'FETCH_CITY_WEATHER_SUCCESSED', cities});
  } catch (error) {
    yield put({type: 'FETCH_CITY_WEATHER_FAILED'});
  }
}

function * cityWeatherSaga() {
  yield takeLatest('FETCHING_CITY_WEATHER', fetchCityWeather);
}

export default cityWeatherSaga;
