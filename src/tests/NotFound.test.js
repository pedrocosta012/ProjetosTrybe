import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from './helper/renderWithRouter';

describe('Confere elementos da página "Not Found"', () => {
  test('Verifica se a página contém um heading', () => {
    renderWithRouter(<NotFound />);
    const title = screen.getByRole('heading', {
      level: 2,
      name: /Page requested not found/i,
    });

    expect(title).toBeInTheDocument();
  });

  test('Verifica se a página contém um git', () => {
    renderWithRouter(<NotFound />);

    const gift = screen
      .getByAltText(/Pikachu crying because the page requested was not found/i).src;

    expect(gift).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
