import { WeatherForecast } from '../../model/types/weatherForecast';

import cls from './WaetherForecastItem.module.scss';

import { CONFIG } from '@/shared/const/config';
import { getTime, getDate } from '@/shared/lib/utils/utils';

interface WeatherForecastItem extends WeatherForecast {}

const ForecastWeatherItem = ({
  date,
  temp,
  feelsLike,
  main,
  icon,
}: WeatherForecastItem) => {
  const isNotValid = !date || !temp || !feelsLike || !main || !icon;
  if (isNotValid) {
    return null;
  }

  return (
    <li className={cls.forecastItem}>
      <div className={cls.forecastItem__top}>
        <span>{getDate(date)}</span>
        <span className={cls.forecastItem__time}>{getTime(date)}</span>
      </div>
      <div className={cls.forecastItem__bottom}>
        <div className={cls.forecastItem__temperature}>
          <span>{`Temperature: ${Math.round(temp)}°`}</span>
          <span>{`Feels like: ${Math.round(feelsLike)}°`}</span>
        </div>
        <div className={cls.forecastItem__weather}>
          <span>{main}</span>
          <img
            className={cls.forecastItem__img}
            src={`${CONFIG.IMG}${icon}@4x.png`}
            alt=""
          />
        </div>
      </div>
    </li>
  );
};

export { ForecastWeatherItem };
