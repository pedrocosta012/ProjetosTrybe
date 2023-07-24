export const SET_USER_DATA = 'SET_USER_DATA';
export const ADD_NEW_EXPENSE = 'ADD_NEW_EXPENSE';
export const SET_FETCHING = 'SET_FETCHING';
export const FETCH_COMPLETED = 'FETCH_COMPLETED';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

// User Actions
export const setUserEmail = (email) => ({
  type: SET_USER_DATA,
  email,
});

// Wallet Actions
const turnFetching = () => ({
  type: SET_FETCHING,
});

export const addNewExpense = (expenseData) => async (dispatch, getState) => {
  dispatch(turnFetching());
  const currValue = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
  delete currValue.USDT;
  const extraValue = expenseData.amount * currValue[expenseData.curr].ask;
  const state = getState();
  const count = state.wallet.expenses.length;
  const newExpenseData = {
    id: count,
    value: expenseData.amount,
    description: expenseData.description,
    currency: expenseData.curr,
    method: expenseData.paymentMethod,
    tag: expenseData.tag,
    exchangeRates: currValue,
  };
  const ObjectToDispatch = {
    type: ADD_NEW_EXPENSE,
    newExpenseData,
    extraValue,
  };
  dispatch(ObjectToDispatch);
};

const getFetchedResults = (data) => ({
  type: FETCH_COMPLETED,
  data,
});

export const fetchResults = () => async (dispatch) => {
  dispatch(turnFetching());
  const results = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
  delete results.USDT;
  dispatch(getFetchedResults(Object.keys(results)));
};

export const removeExpense = (expenseId) => ({
  type: REMOVE_EXPENSE,
  expenseId,
});
