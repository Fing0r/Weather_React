import React from 'react';

import { getForecast, getWeather } from '../../model/selectors/favoriteCities';

import { ForecastWeatherItem } from '@/entities/WeatherForecast';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import './styles.scss';

interface ForecastWeatherProps {}

const ForecastWeather = (props: ForecastWeatherProps) => {
  const { name: cityName } = useAppSelector(getWeather);
  const forecast = useAppSelector(getForecast);

  return (
    <div className="forecast">
      {cityName && <h3 className="forecast__city">{cityName}</h3>}
      {forecast && Object.keys(forecast).length ? (
        <ul className="forecast__list">
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
