import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helper/renderWithRouter';
import App from '../App';

test('Teste se a página contém um heading', () => {
  renderWithRouter(<App />);

  const title = screen.getByRole('heading', { level: 2, name: /Encountered pokémons/i });

  expect(title).toBeInTheDocument();
});

test('Verifica se é exibido outro pokémon ao clicar em "Próximo pokémon"', () => {
  renderWithRouter(<App />);

  const filterAllButton = screen.getByText(/all/i);
  userEvent.click(filterAllButton);

  const firstPokemonName = screen.getByText(/Pikachu/i);
  expect(firstPokemonName).toBeInTheDocument();

  const button = screen.getByText(/Próximo Pokémon/i);
  userEvent.click(button);

  const secondPokemonName = screen.getByText(/Charmander/i);
  expect(secondPokemonName).toBeInTheDocument();
});

test('Verifica se são exibidos todos os botões (Tipos dos Pokemons)', () => {
  const NUMBER_TOTAL_POKEMON_TYPES = 7;

  renderWithRouter(<App />);

  const allButtons = screen.getAllByTestId('pokemon-type-button').length;
  expect(allButtons).toBe(NUMBER_TOTAL_POKEMON_TYPES);
});

test('Verifica se são exibidos os tipos de pokemons (Em seus respectivos botões)', () => {
  const TOTAL_POKEMON_TYPES = [
    /electric/i, /fire/i, /bug/i, /poison/i, /psychic/i, /normal/i, /dragon/i,
  ];

  renderWithRouter(<App />);

  TOTAL_POKEMON_TYPES.forEach((pokemonType) => {
    const button = screen.getByRole('button', { name: pokemonType });
    expect(button).toBeInTheDocument();
  });
});
