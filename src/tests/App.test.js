import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helper/renderWithRouter';
import App from '../App';

describe('Verifica se os 3 Links existem', () => {
  test('Verifica se o Link para "Home" existe', () => {
    renderWithRouter(<App />);

    const lintAtHome = screen.getByText('Home');

    expect(lintAtHome).toBeInTheDocument();
  });

  test('Verifica se o Link para "About" existe', () => {
    renderWithRouter(<App />);

    const lintAtAbout = screen.getByText('About');

    expect(lintAtAbout).toBeInTheDocument();
  });

  test('Verifica se o Link para "Favorites" existe', () => {
    renderWithRouter(<App />);

    const lintAtFavorites = screen.getByText('Favorite Pokémons');

    expect(lintAtFavorites).toBeInTheDocument();
  });
});
