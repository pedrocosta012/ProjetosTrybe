import {
  ADD_NEW_EXPENSE,
  SET_FETCHING,
  FETCH_COMPLETED,
  REMOVE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isFetching: false,
  totalExpenseValue: 0,
};

// Função que vai um pouco além e reorganiza os ids das despesas
// const reOrderExpensesId = (state, expensesId) => {
//   const expensesArray = state.expenses.filter((expense) => expense.id !== expensesId);
//   expensesArray.forEach((expense, index) => {
//     expense.id = index;
//   });
//   return expensesArray;
// };

const reOrderExpensesId = (state, expensesId) => state.expenses
  .filter((expense) => expense.id !== expensesId);

const decrementTotalExpenseValue = (state, expenseId) => {
  const expense = state.expenses.filter(({ id }) => id === expenseId)[0];
  const { value, currency, exchangeRates } = expense;
  const unityValue = Number(exchangeRates[currency].ask);

  return Math.abs(state.totalExpenseValue - Number(value) * unityValue);
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_NEW_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.newExpenseData],
      totalExpenseValue: state.totalExpenseValue + action.extraValue,
    };
  case SET_FETCHING:
    return {
      ...state,
      isFetching: true,
    };
  case FETCH_COMPLETED:
    return {
      ...state,
      currencies: action.data,
      isFetching: false,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      totalExpenseValue: decrementTotalExpenseValue(state, action.expenseId),
      expenses: reOrderExpensesId(state, action.expenseId),
    };
  default:
    return state;
  }
};

export default wallet;
