import React, { Component } from 'react';
import logo from './logo.svg';
import SearchCity from './containers/SearchCity';
import CityWeather from './containers/CityWeather';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Weather App</h1>
        </div>
        <SearchCity />
        <CityWeather />
      </div>
    );
  }
}

export default App;
