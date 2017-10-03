import api from '../api';

// Using thunk
export const fetchCityInfoViaThunk = (cityNames) => {
    console.log('Called thunk!');
    return (dispatch) => {
        // Start fetching
        dispatch({type: 'FETCHING_CITY_WEATHER'});
        
        const promises = cityNames.split(',').map((cityName) => {
            return api.fetchCityWeather(cityName)
        });
        
        return Promise.all(promises)
        .then((cities) => dispatch({ type: 'FETCH_CITY_WEATHER_SUCCESSED', cities }))
        .catch((e) => dispatch({ type: 'FETCH_CITY_WEATHER_FAILED' }))
    }
}

// Using saga so just dispatch a normal action
export const fetchCityInfoViaSaga = (cityNames) => ({ type: 'FETCHING_CITY_WEATHER', cityNames })
