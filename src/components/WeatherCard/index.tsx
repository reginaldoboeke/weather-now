import { AllHTMLAttributes, useEffect, useState } from 'react';

import { useWeather } from '../../hooks/useWeather';
import { Button } from '../Button';

import loaderImg from '../../assets/images/loader.svg';

import './styles.scoped.scss';

interface WeatherCardProps extends AllHTMLAttributes<HTMLDivElement> {
  title: string;
  locale: string;
  isActive: boolean;
}

export function WeatherCard({ locale, title, isActive, ...rest }: WeatherCardProps) {
  const [showDetails, setShowDetails] = useState(isActive);
  const { weather, isLoading, isError, retry } = useWeather({ locale });

  useEffect(() => {
    setShowDetails(isActive && !isLoading && !isError);
  }, [isActive, isLoading, isError]);

  return (
    <div {...rest} className="card">
      <header>
        <h1>{title}</h1>
      </header>

      {isLoading && (
        <div className="loading">
          <img className="loader" src={loaderImg} alt="Loading..." />
        </div>
      )}

      {isError && (
        <div className="error">
          <span className="text-red">Something went wrong</span>
          <Button onClick={retry}>
            Try Again
          </Button>
        </div>
      )}

      {!isLoading && !isError && (
        <>
          <div className="content">
            <h2 className={`text-${weather.temperatureColor}`}>
              {weather?.temperature}
              <span className="symbol">°</span>
            </h2>
          </div>

          <footer>
            {showDetails &&
              (
                <div className="details">
                  <div>
                    <span>HUMIDITY</span>
                    <strong>{weather?.humidity}%</strong>
                  </div>
                  <div>
                    <span>PRESSURE</span>
                    <strong>{weather?.pressure}hPa</strong>
                  </div>
                </div>
              )
            }
            <small>Updated at {weather?.updatedAt}</small>
          </footer>
        </>
      )}
    </div>
  );
}