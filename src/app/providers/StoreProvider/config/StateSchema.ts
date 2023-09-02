import {
  CitiesSchema,
  ForecastSchema,
  CurrentWeatherSchema,
} from '@/features/Weather';
import { StatsSchema } from '@/pages/StatisticPage';

export interface StateSchema {
  favoriteCities: CitiesSchema;
  currentWeather: CurrentWeatherSchema;
  forecast: ForecastSchema;
  stats: StatsSchema;
}
