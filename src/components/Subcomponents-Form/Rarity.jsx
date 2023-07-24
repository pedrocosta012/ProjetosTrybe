import React from 'react';
import PropTypes from 'prop-types';

export default class Rarity extends React.Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <label htmlFor="rare-input">
        Raridade
        {' '}
        <select
          data-testid="rare-input"
          id="rare-input"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}

Rarity.propTypes = (({
  cardRare: PropTypes.string,
  onInputChange: PropTypes.func,
}).isRequired);
