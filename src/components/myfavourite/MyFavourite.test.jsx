import React from 'react';

import { render, screen } from '@testing-library/react';
import MyFavourite from './MyFavourite';
import { describe, it, expect } from 'vitest';

describe('MyFavourite', () => {
  it('renders the MyFavourite component', () => {
    render(<MyFavourite />);
    const iconButton = screen.getByRole('button');
    expect(iconButton).toBeInTheDocument();
  });
});