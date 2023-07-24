import React from 'react';
import PropTypes from 'prop-types';

export default class CardAtribute extends React.Component {
  render() {
    const { cardAttr3, onInputChange } = this.props;
    return (
      <label htmlFor="attr3-input">
        Velocidade
        {' '}
        <input
          data-testid="attr3-input"
          id="attr3-input"
          name="cardAttr3"
          type="number"
          max="90"
          min="0"
          placeholder="Apenas números INTEIROS"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

CardAtribute.propTypes = (({
  cardAttr3: PropTypes.string,
  onInputChange: PropTypes.func,
}).isRequired);
