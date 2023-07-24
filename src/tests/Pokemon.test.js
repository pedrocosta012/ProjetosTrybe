import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helper/renderWithRouter';
import App from '../App';
import pokemons from '../data';

test('Verifica se é renderizado um card com as informações do pokémon', () => {
  renderWithRouter(<App />);
  pokemons.forEach((pokemon) => {
    const pokemonName = screen.getByTestId('pokemon-name').innerHTML;
    expect(pokemonName).toBe(`${pokemon.name}`);

    const pokemonType = screen.getByTestId('pokemon-type', { exact: true }).innerHTML;
    expect(pokemonType).toBe(`${pokemon.type}`);

    const pokemonWeight = screen.getByTestId('pokemon-weight').innerHTML;
    const { value, measurementUnit } = pokemon.averageWeight;
    expect(pokemonWeight).toBe(`Average weight: ${value} ${measurementUnit}`);

    const pokemonImage = screen.getByAltText(`${pokemon.name} sprite`).src;
    expect(pokemonImage).toBe(`${pokemon.image}`);

    const buttonNext = screen.getByText(/próximo pokémon/i);
    userEvent.click(buttonNext);
  });
});

test('Verifica se o link no card leva à página de detalhes do pokemon', () => {
  const { history } = renderWithRouter(<App />);
  pokemons.forEach((pokemon, index) => {
    const link = screen.getByText(/More details/i);
    userEvent.click(link);

    const currPath = history.entries[history.entries.length - 1].pathname;
    expect(currPath).toBe(`/pokemons/${pokemon.id}`);

    const favoriteCheckbox = screen.getByLabelText(/Pokémon favoritado?/i);
    userEvent.click(favoriteCheckbox);

    const starImage = screen.getByAltText(`${pokemon.name} is marked as favorite`);
    expect(starImage).toBeInTheDocument();
    expect(starImage.src).toBe('http://localhost/star-icon.svg');

    history.push('/');

    for (let i = index + 1; i > 0; i -= 1) {
      const nextButton = screen.getByText(/próximo pokémon/i);
      userEvent.click(nextButton);
    }
  });
});
