import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyButton from './MyButton';

describe('MyButton', () => {
  it('renders with the correct text', () => {
    render(<MyButton isFollowing={false}>Seguir</MyButton>);
    expect(screen.getByRole('button')).toHaveTextContent('Seguir');
  });

  it('changes text when isFollowing is true', () => {
    render(<MyButton isFollowing={true}>Dejar de seguir</MyButton>);
    expect(screen.getByRole('button')).toHaveTextContent('Dejar de seguir');
  });
});