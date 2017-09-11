import { takeLatest } from 'redux-saga/effects';
import fetchCityWeather from './sagas/cityWeatherSaga';

export default function* mainSaga() {
    yield takeLatest('FETCHING_CITY_WEATHER', fetchCityWeather);
}