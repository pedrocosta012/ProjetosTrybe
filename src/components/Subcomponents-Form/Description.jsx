import React from 'react';
import PropTypes from 'prop-types';

export default class Description extends React.Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <label htmlFor="description-input">
        Descrição
        {' '}
        <textarea
          data-testid="description-input"
          id="description-input"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Description.propTypes = (({
  cardDescription: PropTypes.string,
  onInputChange: PropTypes.func,
}).isRequired);
