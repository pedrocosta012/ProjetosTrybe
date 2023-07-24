import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <label htmlFor="image-input">
        Imagem
        {' '}
        <input
          data-testid="image-input"
          id="image-input"
          name="cardImage"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Image.propTypes = (({
  cardImage: PropTypes.string,
  onInputChange: PropTypes.func,
}).isRequired);
