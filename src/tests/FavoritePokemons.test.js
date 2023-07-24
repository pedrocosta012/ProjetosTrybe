import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helper/renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';

test('Teste se é exibida na tela a mensagem "No favorite pokemon found"', () => {
  renderWithRouter(<FavoritePokemons />);

  const message = screen.getByText('No favorite pokemon found');

  expect(message).toBeInTheDocument();
});

test('Teste se são exibidos todos os cards de pokémons favoritados', () => {
  renderWithRouter(<App />);

  const detailsLink = screen.getByText(/More details/i);
  userEvent.click(detailsLink);

  const checkbox = screen.getByLabelText(/Pokémon favoritado?/i);
  userEvent.click(checkbox);

  const elementWaited = screen.getByAltText(/Pikachu sprite/i);

  expect(elementWaited).toBeInTheDocument();
});
