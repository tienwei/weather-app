import React from 'react';
import PropTypes from 'prop-types';

const City = ({name, temperature, condition}) => (
    <tr>
      <td>{name}</td>
      <td>{temperature}</td>
      <td>{condition}</td>
    </tr>
)

City.PropTypes = {
  name: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired
}

export default City;
