import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section>
        <h3 data-testid="name-card">{ cardName }</h3>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p>{ cardRare }</p>
        <p data-testid="attr1-card">
          Força
          {' '}
          <span>{ cardAttr1 }</span>
        </p>
        <p data-testid="attr2-card">
          Resistência
          {' '}
          <span>{ cardAttr2 }</span>
        </p>
        <p data-testid="attr3-card">
          Velocidade
          {' '}
          <span>{ cardAttr3 }</span>
        </p>
        <p data-testid="rare-card">
          Raridade
          {' '}
          <span>{ cardRare }</span>
        </p>
        {
          (cardTrunfo)
            && (<p data-testid="trunfo-card" hidden={ !cardTrunfo }>Super Trunfo</p>)
        }
        <p data-testid="description-card">{ cardDescription }</p>
      </section>
    );
  }
}

Card.propTypes = (({
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}).isRequired);
