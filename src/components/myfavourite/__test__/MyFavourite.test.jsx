import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyFavourite from '../MyFavourite';
import { describe, it, expect, vi } from 'vitest'; // Asegúrate de importar 'vi' desde 'vitest'

describe('MyFavourite', () => {
  it('renders the IconButton with the correct aria-label', () => {
    render(<MyFavourite />);
    const iconButton = screen.getByLabelText('add to favorites');
    expect(iconButton).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn(); // Cambia jest.fn() por vi.fn()
    render(<MyFavourite onClick={handleClick} />);
    const iconButton = screen.getByLabelText('add to favorites');
    fireEvent.click(iconButton);
    expect(handleClick).toHaveBeenCalledTimes(1); // Verifica que onClick fue llamado
  });

  it('disables the button when disabled prop is true', () => {
    render(<MyFavourite disabled={true} />);
    const iconButton = screen.getByLabelText('add to favorites');
    expect(iconButton).toBeDisabled(); // Verifica que el botón esté deshabilitado
  });

  it('renders the FavoriteIcon with the correct color', () => {
    const { container } = render(<MyFavourite iconColor="primary" />);
    const favoriteIcon = container.querySelector('svg');
    expect(favoriteIcon).toHaveAttribute('class', expect.stringContaining('MuiSvgIcon-colorPrimary')); // Verifica la clase del color
  });
});