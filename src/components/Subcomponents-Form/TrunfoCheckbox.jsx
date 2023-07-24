import React from 'react';
import PropTypes from 'prop-types';

export default class TrunfoCheckbox extends React.PureComponent {
  render() {
    const { hasTrunfo, cardTrunfo, onInputChange } = this.props;
    if (!hasTrunfo) {
      return (
        <label htmlFor="trunfo-input">
          <input
            name="cardTrunfo"
            id="trunfo-input"
            data-testid="trunfo-input"
            type="checkbox"
            hidden={ hasTrunfo }
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          {' '}
          Super Trybe Trunfo
        </label>
      );
    }
    return <p>Você já tem um Super Trunfo em seu baralho</p>;
  }
}

TrunfoCheckbox.propTypes = (({
  hasTrunfo: PropTypes.bool,
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
}).isRequired);
