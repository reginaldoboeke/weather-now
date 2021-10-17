import { useState } from 'react';

import loaderImg from '../../assets/images/loader.svg';
import { Button } from '../Button';

import './styles.scoped.scss';

interface WeatherCardProps {
  title: string;
  location: string;
  color: string; // TODO: remove this prop;
}

export function WeatherCard({ title, color }: WeatherCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const isLoading = false;
  const isError = false;

  function handleShowDetails() {
    if (!isLoading && !isError) {
      setShowDetails(true);
    }
  }

  function handleHideDetails() {
    setShowDetails(false);
  }

  return (
    <div
      className="card"
      onMouseEnter={handleShowDetails}
      onMouseLeave={handleHideDetails}
    >
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
          <Button onClick={() => {}}>
            Try Again
          </Button>
        </div>
      )}

      {!isLoading && !isError && (
        <>
          <div className="content">
            <h2 className={color}>31</h2>
          </div>

          <footer>
            {showDetails &&
              (
                <div className="details">
                  <div>
                    <span>HUMIDITY</span>
                    <strong>75%</strong>
                  </div>
                  <div>
                    <span>PRESSURE</span>
                    <strong>892hPa</strong>
                  </div>
                </div>
              )
            }
            <small>Updated at 02:44:32 PM</small>
          </footer>
        </>
      )}
    </div>
  );
}