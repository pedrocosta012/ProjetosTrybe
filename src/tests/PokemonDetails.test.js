import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './helper/renderWithRouter';
import pokemons from '../data';
import App from '../App';

test('Verifica os elementos da página de detalhes do pokemon', () => {
  const { history } = renderWithRouter(<App />);

  pokemons.forEach((pokemon, index) => {
    const link = screen.getByText(/More details/i);
    userEvent.click(link);

    const titleDetails = screen.getByRole('heading', {
      level: 2,
      name: `${pokemon.name} Details`,
    });
    expect(titleDetails).toBeInTheDocument();

    const titleSummary = screen.getByRole('heading', {
      level: 2,
      name: 'Summary',
    });
    expect(titleSummary).toBeInTheDocument();

    const summary = screen.getByText(pokemon.summary);
    expect(summary).toBeInTheDocument();

    const titleLocations = screen.getByRole('heading', {
      level: 2,
      name: `Game Locations of ${pokemon.name}`,
    });
    expect(titleLocations).toBeInTheDocument();

    const pokemonLocations = screen
      .getAllByAltText(`${pokemon.name} location`);
    expect(pokemonLocations.length).toBe(pokemon.foundAt.length);

    const urlsImages = pokemon.foundAt.map(({ map }) => map);
    pokemonLocations.forEach((location) => {
      expect(urlsImages).toEqual(expect.arrayContaining([location.src]));
    });

    const checkbox = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(checkbox).toBeInTheDocument();

    history.push('/');
    for (let i = index + 1; i > 0; i -= 1) {
      const nextButton = screen.getByText(/próximo pokémon/i);
      userEvent.click(nextButton);
    }
  });
});
