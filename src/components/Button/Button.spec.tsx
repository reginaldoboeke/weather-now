import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('should renders correct', () => {
    render(<Button children="Button title" />);

    expect(screen.getByText('Button title')).toBeInTheDocument();
  });
});

