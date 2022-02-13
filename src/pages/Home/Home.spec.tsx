import { fireEvent, render, screen } from '@testing-library/react';
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
    const cards = section?.querySelectorAll('.card');

    fireEvent.mouseEnter(screen.getByText('Urubici, BR'));

    expect(section).not.toBeEmptyDOMElement();
    expect(cards?.length).toEqual(3);
    expect(cards && cards[1].querySelector('.details')).not.toBe(null);
  });

  it('should renders details on mouse enter', () => {
    const useWeatherMocked = mocked(useWeather);
    useWeatherMocked.mockReturnValue({
      isLoading: false,
      isError: false,
      weather: {} as any,
    } as any);

    render(<Home />);
    
    const section = document.querySelector('section');
    const cards = section?.querySelectorAll('.card');

    fireEvent.mouseEnter(screen.getByText('Nairobi, KE'));

    expect(cards && cards[2].querySelector('.details')).not.toBe(null);
  });

  it('should hide details of all cards', () => {
    const useWeatherMocked = mocked(useWeather);
    useWeatherMocked.mockReturnValue({
      isLoading: false,
      isError: false,
      weather: {} as any,
    } as any);

    render(<Home />);
    
    const section = document.querySelector('section');
    const cards = section?.querySelectorAll('.card');

    fireEvent.mouseLeave(screen.getByText('Urubici, BR'));

    cards?.forEach(card => {
      expect(card.querySelector('.details')).toBe(null);
    });
  });
});

