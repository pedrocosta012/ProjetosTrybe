import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNewExpense, fetchResults } from '../redux/actions';

const DEFAULT_STATE = {
  amount: '',
  curr: 'USD',
  paymentMethod: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
};

class WalletForm extends Component {
  constructor(props) {
    super(props);

    this.state = DEFAULT_STATE;
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies, newExpense } = this.props;
    const { amount, curr, paymentMethod, tag, description } = this.state;
    const completeExpense = { amount, curr, paymentMethod, tag, description };
    return (
      <form>

        <label htmlFor="value">
          Valor:
          {' '}
          <input
            data-testid="value-input"
            id="value"
            type="number"
            name="amount"
            min={ 0 }
            onChange={ this.handleChange }
            value={ amount }
            placeholder="0"
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          {' '}
          <select
            data-testid="currency-input"
            name="curr"
            onChange={ this.handleChange }
            value={ curr }
          >
            {currencies.map((currency) => (
              <option
                key={ currency }
                value={ currency }
              >
                {currency}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="currency">
          Método de pagamento:
          {' '}
          <select
            data-testid="method-input"
            name="paymentMethod"
            onChange={ this.handleChange }
            value={ paymentMethod }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="currency">
          Tag:
          {' '}
          <select
            data-testid="tag-input"
            name="tag"
            onChange={ this.handleChange }
            value={ tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Descrição:
          {' '}
          <input
            data-testid="description-input"
            id="description"
            name="description"
            onChange={ this.handleChange }
            value={ description }
            type="text"
          />
        </label>

        <button
          type="button"
          onClick={ () => {
            this.setState({ ...DEFAULT_STATE });
            newExpense(completeExpense);
          } }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

WalletForm.propTypes = ({
  currData: PropTypes.objectOf(PropTypes.string),
  fetchCurrencies: PropTypes.func,
  newExpense: PropTypes.func,
}.isRequired);

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchResults()),
  newExpense: (expense) => dispatch(addNewExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
