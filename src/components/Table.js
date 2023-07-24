import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeExpense as rmExpense } from '../redux/actions';

class Table extends Component {
  fixDecimals = (num) => num.toFixed(2);

  multiply = (a, b = 1) => this.fixDecimals(parseFloat(a) * parseFloat(b));

  render() {
    const { expenses, removeExpense } = this.props;
    return (
      <table>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
        <tbody>
          { expenses.length > 0 && expenses
            .map((expenseData) => {
              const {
                id, description, tag, method,
                value, currency, exchangeRates,
              } = expenseData;
              const adjustedValue = this.multiply(value);
              const adjustedUnitValue = this.multiply(exchangeRates[currency].ask);
              const adjustedTotalValue = this.multiply(
                value, exchangeRates[currency].ask,
              );
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{adjustedValue}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{adjustedUnitValue}</td>
                  <td>{adjustedTotalValue}</td>
                  <td>Real</td>
                  <td>
                    <button type="button">Editar</button>
                    /
                    <button
                      data-testid="delete-btn"
                      type="button"
                      onClick={ () => removeExpense(id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = ({
  expenses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  removeExpense: PropTypes.func,
}.isRequired);

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expenseId) => dispatch(rmExpense(expenseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
