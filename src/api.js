import { WEATHER_API_URL, WEATHER_APP_ID } from './constants';

const api = {
  fetchCityWeather(cityName) {
    const url = `${WEATHER_API_URL}/weather?q=${cityName}&units=metric&appid=${WEATHER_APP_ID}`;
    return fetch(url)
      .then(response => response.json())
      .then(city => ({
        id: city.id,
        name: city.name,
        temperature: city.main.temp,
        condition: city.weather[0].main
      }))
  }
}

export default api;
