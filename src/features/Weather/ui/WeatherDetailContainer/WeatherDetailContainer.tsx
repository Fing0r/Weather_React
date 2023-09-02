import { getWeather } from '../../model/selectors/favoriteCities';

import { WeatherDetail } from '@/entities/WeatherCurrent';
import { useAppSelector } from '@/shared/lib/hooks/redux';

interface DetailsWeatherProps {}

const WeatherDetailContainer = (props: DetailsWeatherProps) => {
  const weather = useAppSelector(getWeather);

  return <WeatherDetail weather={weather} />;
};

export { WeatherDetailContainer };
