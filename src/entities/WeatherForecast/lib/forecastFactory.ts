import {
  WeatherForecast,
  WeatherForecastData,
} from '../model/types/weatherForecast';

export function forecastFactory(item: WeatherForecastData): WeatherForecast {
  const {
    dt: date,
    main: { temp, feels_like: feelsLike },
    weather: {
      0: { main, icon },
    },
  } = item;

  return { date, temp, feelsLike, main, icon };
}
