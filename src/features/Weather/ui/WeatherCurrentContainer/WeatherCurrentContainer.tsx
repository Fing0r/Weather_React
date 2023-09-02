import { memo, useCallback, useMemo } from 'react';

import {
  getFavoriteCities,
  getSelectedCity,
  getWeather,
} from '../../model/selectors/favoriteCities';
import { toggleCity } from '../../model/slice/favoriteCitiesSlice';

import { WeatherCurrentItem } from '@/entities/WeatherCurrent';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';

interface NowWeatherProps {}

const WeatherCurrentContainer = memo((props: NowWeatherProps) => {
  const dispatch = useAppDispatch();
  const weather = useAppSelector(getWeather);
  const favoriteCities = useAppSelector(getFavoriteCities);
  const selectedCity = useAppSelector(getSelectedCity);

  const { name } = weather;

  const onClick = useCallback(() => {
    if (name) {
      dispatch(toggleCity(name));
    }
  }, [name, dispatch]);

  const isFavorites = useMemo(
    () => favoriteCities?.includes(selectedCity),
    [favoriteCities, selectedCity],
  );

  return (
    <WeatherCurrentItem
      weather={weather}
      onClick={onClick}
      isFavorites={isFavorites}
    />
  );
});

export { WeatherCurrentContainer };
