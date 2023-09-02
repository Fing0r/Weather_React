import { WeatherCurrent, WeatherData } from '../model/types/weatherCurrent';

export function weatherFactory(item: WeatherData): WeatherCurrent {
  const {
    dt: date,
    main: { temp, feels_like: feelsLike },
    name,
    weather: {
      0: { main, icon },
    },
    sys: { sunrise, sunset },
  } = item;

  return { date, feelsLike, temp, main, icon, name, sunrise, sunset };
}
