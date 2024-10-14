import React from 'react';

import { render, screen } from '@testing-library/react';
import IsmaelVH from './IsmaelVH';
import { describe, it, expect } from 'vitest';

describe('IsmaelVH', () => {
  it('renders the IsmaelVH component', () => {
    render(<IsmaelVH firstName="Ismael" lastName="Vega" />);
    const avatar = screen.getByText('IV');
    expect(avatar).toBeInTheDocument();
  });
});