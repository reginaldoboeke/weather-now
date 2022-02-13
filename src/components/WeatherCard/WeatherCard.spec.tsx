import { render, screen, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { WeatherCard } from '.';
import { useWeather } from '../../hooks/useWeather';

jest.mock('../../hooks/useWeather');

describe('WeatherCard', () => {
  it('should renders correct', () => {
    const useWeatherMocked = mocked(useWeather);
    useWeatherMocked.mockReturnValueOnce({
      isLoading: true,
      isError: false,
      retry: () => { return new Promise(res => res()) },
      weather: {} as any,
    });

    render(<WeatherCard locale="Urubici" title="Urubici, BR" isActive={false} />);
    
    const weatherNowDetails = document.querySelector('.details');

    expect(screen.getByText('Urubici, BR')).toBeInTheDocument();
    expect(weatherNowDetails).toBe(null);
  });

  it('should render loading', () => {
    const useWeatherMocked = mocked(useWeather);

    useWeatherMocked.mockReturnValueOnce({
      isLoading: true,
      isError: false,
      retry: () => { return new Promise(res => res()) },
      weather: {} as any,
    });

    render(<WeatherCard locale="Urubici" title="Urubici, BR" isActive={false} />);

    expect(screen.getByAltText('Loading...')).toBeInTheDocument();
  });

  it('should render error', () => {
    const useWeatherMocked = mocked(useWeather);

    useWeatherMocked.mockReturnValueOnce({
      isLoading: false,
      isError: true,
      retry: () => { return new Promise(res => res()) },
      weather: {} as any,
    });

    render(<WeatherCard locale="Urubici" title="Urubici, BR" isActive={false} />);

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Try Again')).toBeInTheDocument();
  });

  it('should retry request when has error', () => {
    const useWeatherMocked = mocked(useWeather);
    const retryMock = jest.fn();

    useWeatherMocked.mockReturnValueOnce({
      isError: true,
      retry: retryMock,
    } as any);

    render(<WeatherCard locale="Urubici" title="Urubici, BR" isActive={false} />);

    const tryAgainButton = screen.getByText('Try Again');

    fireEvent.click(tryAgainButton);

    expect(retryMock).toHaveBeenCalled();
  });

  it('should render weather now main information', () => {
    const dataToTest: WeatherNow = {
      temperature: 10,
      humidity: 81,
      pressure: 1020,
      updatedAt: new Date().toLocaleTimeString('en-US'),
      temperatureColor: 'orange',
    };
    
    const useWeatherMocked = mocked(useWeather);
    useWeatherMocked.mockReturnValueOnce({
      isLoading: false,
      isError: false,
      retry: () => { return new Promise(res => res()) },
      weather: dataToTest,
    });

    render(<WeatherCard locale="Urubici" title="Urubici, BR" isActive={false} />);

    expect(screen.getByText(dataToTest.temperature)).toBeInTheDocument();
    expect(screen.getByText(`Updated at ${dataToTest.updatedAt}`)).toBeInTheDocument();
  });

  it('should render temperature in correct color', () => {
    const dataToTest: WeatherNow = {
      temperature: 5,
      humidity: 81,
      pressure: 1020,
      updatedAt: new Date().toLocaleTimeString('en-US'),
      temperatureColor: 'blue',
    };
    
    const useWeatherMocked = mocked(useWeather);
    useWeatherMocked.mockReturnValueOnce({
      isLoading: false,
      isError: false,
      retry: () => { return new Promise(res => res()) },
      weather: dataToTest,
    });

    render(<WeatherCard locale="Urubici" title="Urubici, BR" isActive={false} />);

    const h2Temperature = document.querySelector('h2');
    const textBlueClass = h2Temperature?.classList.contains(`text-${dataToTest.temperatureColor}`);

    expect(screen.getByText(dataToTest.temperature)).toBeInTheDocument();
    expect(textBlueClass).toBe(true);
  });

  it('should render weather now details', () => {
    const dataToTest: WeatherNow = {
      temperature: 10,
      humidity: 81,
      pressure: 1020,
      updatedAt: new Date().toLocaleTimeString('en-US'),
      temperatureColor: 'orange',
    };
    
    const useWeatherMocked = mocked(useWeather);
    useWeatherMocked.mockReturnValueOnce({
      isLoading: false,
      isError: false,
      retry: () => { return new Promise(res => res()) },
      weather: dataToTest,
    });

    render(<WeatherCard locale="Urubici" title="Urubici, BR" isActive={true} />);

    expect(screen.getByText(`${dataToTest.humidity}%`)).toBeInTheDocument();
    expect(screen.getByText(`${dataToTest.pressure}hPa`)).toBeInTheDocument();
  });
});

