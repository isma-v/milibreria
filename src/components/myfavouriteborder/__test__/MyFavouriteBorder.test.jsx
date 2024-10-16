import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyFavouriteBorder from '../MyFavouriteBorder';
import { describe, it, expect, vi } from 'vitest'; // Importa 'vi' de vitest

describe('MyFavouriteBorder', () => {
  it('renders the IconButton with the correct aria-label', () => {
    render(<MyFavouriteBorder />);
    const iconButton = screen.getByLabelText('add to favorites');
    expect(iconButton).toBeInTheDocument(); // Verifica que el botón se renderiza
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn(); // Función mock
    render(<MyFavouriteBorder onClick={handleClick} />);
    const iconButton = screen.getByLabelText('add to favorites');
    fireEvent.click(iconButton); // Simula un clic en el botón
    expect(handleClick).toHaveBeenCalledTimes(1); // Verifica que onClick fue llamado
  });

  it('disables the button when disabled prop is true', () => {
    render(<MyFavouriteBorder disabled={true} />);
    const iconButton = screen.getByLabelText('add to favorites');
    expect(iconButton).toBeDisabled(); // Verifica que el botón esté deshabilitado
  });

  it('renders the FavoriteBorderIcon with the correct color', () => {
    const { container } = render(<MyFavouriteBorder iconColor="red" />);
    const favoriteBorderIcon = container.querySelector('svg');
    expect(favoriteBorderIcon).toHaveStyle('color: rgb(255, 0, 0)'); // Verifica el color en formato RGB
  });
});
