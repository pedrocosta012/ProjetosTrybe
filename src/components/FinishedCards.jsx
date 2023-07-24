import React from 'react';
import PropTypes from 'prop-types';

export default class FinishedCards extends React.Component {
  render() {
    const { cardList, removeCard } = this.props;
    return cardList.map(({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    }, index) => (
      <div key={ index }>
        <h3>{ cardName }</h3>
        <img src={ cardImage } alt={ cardName } />
        <p>{ cardRare }</p>
        <p>
          Força
          {' '}
          <span>{ cardAttr1 }</span>
        </p>
        <p>
          Resistência
          {' '}
          <span>{ cardAttr2 }</span>
        </p>
        <p>
          Velocidade
          {' '}
          <span>{ cardAttr3 }</span>
        </p>
        <p>
          Raridade
          {' '}
          <span>{ cardRare }</span>
        </p>
        {
          (cardTrunfo)
            && (<p hidden={ !cardTrunfo }>Super Trunfo</p>)
        }
        <p>{ cardDescription }</p>
        <button
          data-testid="delete-button"
          type="button"
          onClick={ () => removeCard(index) }
        >
          Excluir
        </button>
      </div>
    ));
  }
}

FinishedCards.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
  removeCard: PropTypes.func.isRequired,
};
