import { all, call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import cityWeatherSaga from './cityWeatherSaga';
import api from '../api';

describe('City Weather Saga', () => {
  const mockedAction = { cityNames: 'city1, city2' };
  const mockedCities = [{ id: 1, name: 'city 1' }, { id: 2, name: 'city 2' }]
  const itr = cityWeatherSaga(mockedAction);

  test('returns an iteratee', () => {
    expect(typeof itr.next).toEqual('function');
  });

  test('calls the fetch api with the given city names', () => {
    expect(itr.next().value).toEqual(all(mockedAction.cityNames.split(',').map(cityName => {
      return call(api.fetchCityWeather, cityName);
    })));
  });

  test('dispatches "FETCH_CITY_WEATHER_SUCCESSED" after getting the return the city weather data', () => {
    expect(itr.next(mockedCities).value).toEqual(put({type: 'FETCH_CITY_WEATHER_SUCCESSED', cities: mockedCities}));  
  });

  test('should be done', () => (expect(itr.next().done).toEqual(true)));
})
