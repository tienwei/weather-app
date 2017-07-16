const weatherApp = (state={isFetching: false, error: null, cities: []}, action) => {
  switch(action.type) {
    case 'FETCHING_CITY_WEATHER':
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case 'FETCH_CITY_WEATHER_SUCCESSED':
      return {
        ...state,
        isFetching: false,
        cities: action.cities
      }
    case 'FETCH_CITY_WEATHER_FAILED':
      return {
        ...state,
        isFetching: false,
        error: { message: 'No Results Found. Please try again.' }
      }
    default:
      return state
  }
}

export default weatherApp;
