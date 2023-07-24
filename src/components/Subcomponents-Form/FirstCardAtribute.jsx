import React from 'react';
import PropTypes from 'prop-types';

export default class CardAtribute extends React.Component {
  render() {
    const { cardAttr1, onInputChange } = this.props;
    return (
      <label htmlFor="attr1-input">
        Força
        {' '}
        <input
          data-testid="attr1-input"
          id="attr1-input"
          name="cardAttr1"
          type="number"
          max="90"
          min="0"
          placeholder="Apenas números INTEIROS"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

CardAtribute.propTypes = (({
  cardAttr1: PropTypes.string,
  onInputChange: PropTypes.func,
}).isRequired);
