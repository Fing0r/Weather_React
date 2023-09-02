import cls from './WeatherDetail.module.scss';

import { WeatherCurrent } from '@/entities/WeatherCurrent';
import { getTime } from '@/shared/lib/utils/utils';

interface DetailsWeatherProps {
  weather: WeatherCurrent;
}

const WeatherDetail = (props: DetailsWeatherProps) => {
  const { weather } = props;
  const { temp, feelsLike, main, sunrise, sunset, name } = weather;

  const isNotHasWeather = !(name && temp && feelsLike && sunrise && sunset);
  if (isNotHasWeather) {
    return null;
  }

  return (
    <div className={cls.details}>
      <h3 className={cls.details__city}>{name}</h3>
      <div className={cls.details__info}>
        <span>Temperature: {Math.round(temp)}°</span>
        <span>Feels like: {Math.round(feelsLike)}°</span>
        <span>Weather: {main}</span>
        <span>Sunrise: {getTime(sunrise)}</span>
        <span>Sunset: {getTime(sunset)}</span>
      </div>
    </div>
  );
};

export { WeatherDetail };
