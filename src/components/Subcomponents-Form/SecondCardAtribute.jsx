import React from 'react';
import PropTypes from 'prop-types';

export default class CardAtribute extends React.Component {
  render() {
    const { cardAttr2, onInputChange } = this.props;
    return (
      <label htmlFor="attr2-input">
        Resistência
        {' '}
        <input
          data-testid="attr2-input"
          id="attr2-input"
          name="cardAttr2"
          type="number"
          max="90"
          min="0"
          placeholder="Apenas números INTEIROS"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

CardAtribute.propTypes = (({
  cardAttr2: PropTypes.string,
  onInputChange: PropTypes.func,
}).isRequired);
