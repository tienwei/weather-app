import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCityInfoViaThunk, fetchCityInfoViaSaga } from '../actions/index';

let SearchCity = ({ fetchCityInfoViaSaga, fetchCityInfoViaThunk }) => {
  let input;

  const handleOnClickViaThunk = () => (e) => {
    console.log('called');
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    // actionCreator with redux thunk
    fetchCityInfoViaThunk(input.value);
    input.value = ''
  }

  const handleOnClickViaSaga = () => (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    // actionCreator with redux saga
    fetchCityInfoViaSaga(input.value);
    input.value = ''
  }

  return (
    <form style={{padding: 20}}>
      <label htmlFor='city-search'>Cities: </label>
      <input style={{minWidth: 200}} name='city-search' placeholder='Enter City Names (seperate with ",")' ref={node => {
        input = node
      }} />
      <div style={{marginTop: 20}}>
        <button type='button' style={{marginLeft: 10}} onClick={handleOnClickViaThunk()}>Submit with thunk</button>
        <button type='button' style={{marginLeft: 10}} onClick={handleOnClickViaSaga()}>Submit with saga</button>
      </div>
    </form>
  );
}

const mapStateToProps = (state = {}) => ({});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchCityInfoViaThunk, fetchCityInfoViaSaga }, dispatch)
)

export default SearchCity = connect(mapStateToProps, mapDispatchToProps)(SearchCity);
