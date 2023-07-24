import React from 'react';
import PropTypes from 'prop-types';

export default class Name extends React.Component {
  render() {
    const { cardName, onInputChange } = this.props;
    return (
      <label htmlFor="name-input">
        Nome
        {' '}
        <input
          data-testid="name-input"
          id="name-input"
          name="cardName"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Name.propTypes = (({
  cardName: PropTypes.string,
  onInputChange: PropTypes.func,
}).isRequired);
