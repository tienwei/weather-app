import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk'; 
import configureMockStore from 'redux-mock-store';
import { fetchCityInfoViaThunk, fetchCityInfoViaSaga } from './index';
import { WEATHER_API_URL, WEATHER_APP_ID } from '../constants';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const testCities = 'city1, city2';

describe('City Weather Thunk', () => {
    afterEach(() => {
        fetchMock.restore();
    });
    
    test('fetches cities via redux thunk', () => {
        const mockCity = { id: 1, name: 'city1', main:{ temp: 10}, weather:[{main: 'Clouds'}] };
        fetchMock.get('*', mockCity);
        
        const store = mockStore();
        // Need to return actions
        return store.dispatch(fetchCityInfoViaThunk(testCities)).then(() => {
            const allActions = store.getActions();
            expect(allActions[0].type).toEqual('FETCHING_CITY_WEATHER');
            expect(allActions[1].cities.length).toEqual(2);
            expect(allActions[1].type).toEqual('FETCH_CITY_WEATHER_SUCCESSED');
        });
    });

    test('fetches cities via redux saga', () => {
        expect(fetchCityInfoViaSaga(testCities)).toEqual({ type: 'FETCHING_CITY_WEATHER', cityNames: testCities })
    });
});