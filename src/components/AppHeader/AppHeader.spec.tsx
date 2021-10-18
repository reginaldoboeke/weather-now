import { render, screen } from '@testing-library/react';
import { AppHeader } from '.';

describe('AppHeader', () => {
  it('should renders correct', () => {
    render(<AppHeader />);

    expect(screen.getByAltText('WeatherNow Logo')).toBeInTheDocument();
  });
});

