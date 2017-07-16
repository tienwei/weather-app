import React from 'react';
import PropTypes from 'prop-types';
import City from './City';
import './CityList.css';

const CityList = ({isFetching, cities = [], error = null}) => {
  let resultView;
  if(error) {
    resultView = <tr><td colSpan={3}><b style={{color: 'red'}}>{error.message}</b></td></tr>;
  } else {
    resultView = cities.map(city =>
          <City key={city.id}
            {...city}
          />
      );
  }

  const listView = isFetching
    ? (<p>Fetching data...</p>)
    : (
      <table className='weather-board'>
        <thead>
          <tr>
            <th>Name</th>
            <th>&deg;C</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          {resultView}
        </tbody>
      </table>
    );

  return (<div style={{display: 'flex', justifyContent: 'center'}}>{listView}</div>)
}

CityList.PropTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default CityList;
