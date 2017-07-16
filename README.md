# Weather App

This is a simple weather search app powered by [`Create-react-app`](https://github.com/facebookincubator/create-react-app) [`React`](https://facebook.github.io/react/), [`Redux`](http://redux.js.org/), [`Redux-Sagas`](https://github.com/redux-saga/redux-saga), [`Open Weather API`](https://openweathermap.org)

-------------------------------------
## Quick Overview
* To run, clone the repository, and then
    ```sh
        $ cd weather-app
        $ npm install or yarn
        $ npm start or yarn start
    ```
By default, the app will be served on `localhost:3000`.
To be able consume the weather api, you need to set `WEATHER_APP_ID` with a valid app id in `./src/constants.js`.

* To test, run `npm test` or `yarn test`.

-------------------------------------------
## TODO
* Use environment variable to set `WEATHER_APP_ID`.
* Add more tests.
