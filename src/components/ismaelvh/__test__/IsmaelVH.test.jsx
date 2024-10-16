import React from 'react';
import { render, screen } from '@testing-library/react';
import IsmaelVH from '../IsmaelVH'
import { describe, it, expect } from 'vitest';

describe('IsmaelVH', () => {
  it('renders the IconButton component', () => {
    render(<IsmaelVH />);
    const iconButton = screen.getByLabelText('add to favorites');
    expect(iconButton).toBeInTheDocument();
  });
});