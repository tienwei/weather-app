import weatherApp from './index';

describe('Test Reducer', () => {
  const initialState = {
    isFetching: false,
    error: null,
    cities: []
  }

  const fakeCities = [{
        id: 1,
        name: 'test city',
        temperature: 15,
        condition: 'Sunny'
      }];

  test('should return the initial state', () => {
    expect(weatherApp(undefined, {})).toEqual(initialState);
  })

  // when fetching city weather
  test('should be fetching', () => {
    const action = {
      type: 'FETCHING_CITY_WEATHER',
      cityName: 'Test City'
    }
    expect(weatherApp(initialState, action).isFetching).toBe(true);
  })

  test('should handle FETCHING_CITY_WEATHER', () => {
    const action = {
      type: 'FETCHING_CITY_WEATHER',
      cityName: 'Test City'
    }
    expect(weatherApp(initialState, action).isFetching).toBe(true);
  })

  test('should handle FETCH_CITY_WEATHER_SUCCESSED', () => {
    const previousState = {
      isFetching: true,
      error: null,
      cities: []
    }
    const action = {
      type: 'FETCH_CITY_WEATHER_SUCCESSED',
      cities: fakeCities
    }
    expect(weatherApp(previousState, action).isFetching).toBe(false);
    expect(weatherApp(previousState, action).error).toBeFalsy();
    expect(weatherApp(previousState, action).cities).toBe(fakeCities);
  })

  test('should handle FETCH_CITY_WEATHER_FAILED', () => {
    const previousState = {
      isFetching: true,
      error: null,
      cities: []
    }
    const action = {
      type: 'FETCH_CITY_WEATHER_FAILED'
    }
    expect(weatherApp(previousState, action).error.message).toBe('No Results Found. Please try again.');
  })
})

