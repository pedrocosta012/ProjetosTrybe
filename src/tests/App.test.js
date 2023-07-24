import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';
import mockFetchData from './mock/mockFetchData';
import ContextOfTheForce from '../context';
import userEvent from '@testing-library/user-event';

test('Verifica chamada de API no início da aplicação', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockFetchData),
  }));
  render(<ContextOfTheForce><App /></ContextOfTheForce>);
  expect(fetch).toBeCalled();
  expect(fetch).toBeCalledWith('https://swapi-trybe.herokuapp.com/api/planets/');
});

test('Verifica se o filtro funciona', async () => {
  render(<ContextOfTheForce><App /></ContextOfTheForce>);
  // const columnSelect = await screen.findByTestId('column-filter');
  // const comparisonSelect = await screen.findByTestId('comparison-filter');
  // const valueField = await screen.findByTestId('value-filter');
  // const buttonFilter = await screen.findByTestId('button-filter');
  // userEvent.selectOptions(columnSelect, 'diameter');
  // userEvent.selectOptions(comparisonSelect, 'maior que');
  // userEvent.clear(valueField);
  // userEvent.type(valueField, '8900');
  // userEvent.click(buttonFilter);
  // const filter = await screen.findByTestId('filter');
  // expect(filter).toBeInTheDocument();
});
