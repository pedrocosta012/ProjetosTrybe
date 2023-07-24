import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helper/renderWithRouter';
import About from '../pages/About';

describe('Verifica se a página contém as informações sobre a Pokédex', () => {
  test('Verifica se a página contém o título "About Pokédex"', () => {
    renderWithRouter(<About />);
    const title = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });

    expect(title).toBeInTheDocument();
  });

  test('Verifica se a página contém a imagem da Pokédex', () => {
    renderWithRouter(<About />);
    const pokedexImage = screen.getByRole('img', {
      name: 'Pokédex',
    });

    expect(pokedexImage.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
