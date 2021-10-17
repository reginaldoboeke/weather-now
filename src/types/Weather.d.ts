type WeatherResponse = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: Coordinates;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Array<Weather>;
  wind: Wind;
}

type Coordinates = {
  lat: number;
  lon: number;
}

type Main = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

type Sys = {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
}

type Wind = {
  deg: number;
  speed: number;
}

type TemperatureColor = 'blue' | 'orange' | 'red';

type WeatherNow = {
  temperature: number;
  humidity: number;
  pressure: number;
  updatedAt: string;
  temperatureColor: TemperatureColor;
}