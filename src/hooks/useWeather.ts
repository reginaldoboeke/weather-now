import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { cacheProvider } from '../services/cache-provider';
import { dateProvider } from '../services/date-provider';

interface UseWeatherProps {
  locale: string;
  cacheTimeInMinutes?: number;
}

export function useWeather({ locale, cacheTimeInMinutes = 10 }: UseWeatherProps) {
  const [data, setData] = useState<WeatherNow>({} as WeatherNow);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  let scheduleId: NodeJS.Timeout;

  async function loadWeather() {
    try {
      setIsError(false);
      setIsLoading(true);

      const cachedData = cacheProvider.getIfValid<WeatherNow>(locale);
      if (cachedData) {
        const { expiresIn, data } = cachedData;

        setData({
          temperature: data.temperature,
          humidity: data.humidity,
          pressure: data.pressure,
          updatedAt: data.updatedAt,
          temperatureColor: data.temperatureColor,
        });
        
        // tempo restante de validade do cache
        const minutesToExpire = dateProvider.diffMinutes(new Date(expiresIn));
        scheduleId = scheduleWeatherUpdate(minutesToExpire);

      } else {
        const { data } = await api.get<WeatherResponse>('weather', {
          params: {
            q: locale,
            appid: 'dcf07cb04a106a97b39fd96956a182fb',
            units: 'metric',
          },
        });

        const timestampInMilliseconds = data.dt * 1000;
        const weatherNow: WeatherNow = {
          temperature: Number(data.main.temp.toFixed(1)),
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          updatedAt: new Date(timestampInMilliseconds).toLocaleTimeString('en-US'),
          temperatureColor: getTemperatureColor(data.main.temp),
        }

        setData(weatherNow);
        const expiresIn = dateProvider.addMinutes(cacheTimeInMinutes);
        cacheProvider.save({ key: locale, data: weatherNow, expiresIn });

        scheduleId = scheduleWeatherUpdate(cacheTimeInMinutes);
      }

    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function scheduleWeatherUpdate(minutes: number) {
    const timeout = (60 * 1000) * minutes;
    return setTimeout(() => loadWeather(), timeout);
  }

  function getTemperatureColor(temperature: number): TemperatureColor {
    if (temperature <= 5) return 'blue';
    if (temperature <= 25) return 'orange';
    return 'red';
  }

  useEffect(() => {
    loadWeather();

    return () => {
      // ao sair da tela, cancela o agendamento de atualização
      clearTimeout(scheduleId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return {
    isLoading,
    isError,
    weather: data,
    retry: loadWeather,
  }
}