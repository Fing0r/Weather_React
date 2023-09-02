import { FavoriteCities } from '../FavoriteCities/FavoriteCities';
import { SearchForm } from '../SearchForm/SearchForm';
import { WeatherInfo } from '../WeatherInfo/WeatherInfo';

import cls from './Weather.module.scss';

const Weather = () => {
  return (
    <div className={cls.weather}>
      <div className={cls.weather__list}>
        <div className={cls.weather__item}>
          <SearchForm />
        </div>
        <div className={cls.weather__item}>
          <WeatherInfo />
        </div>
        <div className={cls.weather__item}>
          <FavoriteCities />
        </div>
      </div>
    </div>
  );
};

export { Weather };
