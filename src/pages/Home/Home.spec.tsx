import { render } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';

import { useWeather } from '../../hooks/useWeather';
import { Home } from '.';

jest.mock('../../hooks/useWeather');

describe('Home page', () => {
  it('should renders correct', () => {
    const useWeatherMocked = mocked(useWeather);
    useWeatherMocked.mockReturnValue({
      isLoading: false,
      isError: false,
      weather: {} as any,
    } as any);

    render(<Home />);
    
    const section = document.querySelector('section');
    const cardsLength = section?.querySelectorAll('.card').length;

    expect(section).not.toBeEmptyDOMElement();
    expect(cardsLength).toEqual(3);
  });
});

