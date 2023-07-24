import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import FinishedCards from './components/FinishedCards';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };

    this.removeCard = this.removeCard.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.controlEnabledButton = this.controlEnabledButton.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.controlEnabledButton);
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    const cardObject = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cardList: [...prevState.cardList, cardObject],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  }

  controlEnabledButton() {
    // Desconstrução de 'this.state'
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    // Verificação de strings vazias
    const stringProperties = [cardName, cardDescription, cardImage];
    const checkStrings = stringProperties.every((prop) => prop !== '');
    // Verificação de compos numéricos vazios
    const numProperties = [cardAttr1, cardAttr2, cardAttr3];
    const maxPointsByInput = 90;
    const checkNumerics = numProperties
      .every((prop) => parseInt(prop, 10) >= 0 && parseInt(prop, 10) <= maxPointsByInput);
    // Alteração do state "isSaveButtonDisabled" para tornar o botão Salvar utilizável
    if (checkStrings && checkNumerics) {
      // Soma de pontos atribuídos ao trunfo
      const sumAttrsPoints = numProperties
        .reduce((acc, prop) => acc + parseInt(prop, 10), 0);
      const maxPointsAllowed = 210;
      if ((sumAttrsPoints <= maxPointsAllowed)) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  removeCard(key) {
    const { cardList } = this.state;
    cardList.pop(key);
  }

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
      cardList,
    } = this.state;

    return (
      <main>
        <section>
          <h1>Tryunfo</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </section>
        <section>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <section>
          <FinishedCards
            cardList={ cardList }
            removeCard={ removeCard }
          />
        </section>
      </main>
    );
  }
}

export default App;
