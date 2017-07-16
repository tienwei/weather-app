import { connect } from 'react-redux';
import CityList from '../components/CityList'

const mapStateToProps = (state = {}) => {
  return {
    ...state,
    cities: state.cities
  };
}

const CityWeather = connect(mapStateToProps)(CityList);

export default CityWeather;
