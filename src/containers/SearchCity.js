import React from 'react';
import { connect } from 'react-redux';

let SearchCity = ({ dispatch, cityNames = '' }) => {
  let input;
  return (
    <form style={{padding: 20}} onSubmit = {e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch({type: 'FETCHING_CITY_WEATHER', cityNames: input.value})
        input.value = ''
      }}>
      <label htmlFor='city-search'>Cities: </label>
      <input style={{minWidth: 200}} name='city-search' placeholder='Enter City Names (seperate with ",")' ref={node => {
        input = node
      }} />
      <button type='submit' style={{marginLeft: 10}}>Submit</button>
    </form>
  );
}

export default SearchCity = connect()(SearchCity);
