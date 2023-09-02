import React from 'react';

import { getForecast, getWeather } from '../../model/selectors/favoriteCities';

import cls from './ForecastWeather.module.scss';

import { ForecastWeatherItem } from '@/entities/WeatherForecast';
import { useAppSelector } from '@/shared/lib/hooks/redux';

interface ForecastWeatherProps {}

const ForecastWeather = (props: ForecastWeatherProps) => {
  const { name: cityName } = useAppSelector(getWeather);
  const forecast = useAppSelector(getForecast);

  return (
    <div className={cls.forecast}>
      {cityName && <h3 className={cls.forecast__city}>{cityName}</h3>}
      {forecast && Object.keys(forecast).length ? (
        <ul>
          {forecast.map((item) => (
            <ForecastWeatherItem {...item} key={item.date} />
          ))}
        </ul>
      ) : (
        <span>Данные отсутствуют</span>
      )}
    </div>
  );
};

export { ForecastWeather };
