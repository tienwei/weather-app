import { takeLatest, call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import cityWeatherSaga from './cityWeatherSaga';

describe('City Weather Saga', () => {
  test('returns an iteratee', () => {
    const itr = cityWeatherSaga();
    expect(typeof itr.next).toEqual('function');
  });

})
