import React from 'react';
import PropTypes from 'prop-types';
import Name from './Subcomponents-Form/Name';
import Description from './Subcomponents-Form/Description';
import FirstCardAtribute from './Subcomponents-Form/FirstCardAtribute';
import SecondCardAtribute from './Subcomponents-Form/SecondCardAtribute';
import ThirdCardAtribute from './Subcomponents-Form/ThirdCardAtribute';
import Image from './Subcomponents-Form/Image';
import Rarity from './Subcomponents-Form/Rarity';
import TrunfoCheckbox from './Subcomponents-Form/TrunfoCheckbox';
import SaveCardButton from './Subcomponents-Form/SaveCardButton';

export default class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <Name cardName={ cardName } onInputChange={ onInputChange } />
        <Description
          cardDescription={ cardDescription }
          onInputChange={ onInputChange }
        />
        <FirstCardAtribute
          cardAttr1={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <SecondCardAtribute
          cardAttr2={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <ThirdCardAtribute
          cardAttr3={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <Image cardImage={ cardImage } onInputChange={ onInputChange } />
        <Rarity
          cardRare={ cardRare }
          onInputChange={ onInputChange }
        />
        <TrunfoCheckbox
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
        />
        <SaveCardButton
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = (({
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}).isRequired);
