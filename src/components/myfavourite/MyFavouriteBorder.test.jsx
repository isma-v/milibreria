import React from 'react';
import { render, screen } from '@testing-library/react';
import MyFavouriteBorder from './MyFavouriteBorder';
import { describe, it, expect } from 'vitest';

describe('MyFavouriteBorder', () => {
  it('renders the MyFavouriteBorder component', () => {
    render(<MyFavouriteBorder />);
    const iconButton = screen.getByRole('button');
    expect(iconButton).toBeInTheDocument();
  });

  it('renders with disabled state', () => {
    render(<MyFavouriteBorder disabled />);
    const iconButton = screen.getByRole('button');
    expect(iconButton).toBeDisabled();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn(); // Usa vi.fn() para mockear la función
    render(<MyFavouriteBorder onClick={handleClick} />);
    const iconButton = screen.getByRole('button');
    iconButton.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  
});