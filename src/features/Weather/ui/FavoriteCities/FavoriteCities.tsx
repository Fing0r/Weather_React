import { memo, useCallback } from 'react';

import { getFavoriteCities } from '../../model/selectors/favoriteCities';
import { fetchCurrentWeather } from '../../model/services/fetchCurrentWeather';
import { fetchForecast } from '../../model/services/fetchForecast';
import { chooseCity, removeCity } from '../../model/slice/favoriteCitiesSlice';
import { FavoriteCitiesItem } from '../FavoriteCitiesItem/FavoriteCitiesItem';

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';

interface FavoriteCitiesProps {}

const FavoriteCities = memo((props: FavoriteCitiesProps) => {
  const dispatch = useAppDispatch();
  const favoriteCities = useAppSelector(getFavoriteCities);

  const onClickCity = useCallback(
    (city: string) => {
      dispatch(chooseCity(city));
      dispatch(fetchCurrentWeather(city));
      dispatch(fetchForecast(city));
    },
    [dispatch],
  );

  const onDeleteFavoriteCity = useCallback(
    (city: string) => dispatch(removeCity(city)),
    [dispatch],
  );

  const favoriteItems = favoriteCities?.map((item) => (
    <FavoriteCitiesItem
      key={item}
      onDeleteFavoriteCity={onDeleteFavoriteCity}
      onClickCity={onClickCity}
      label={item}
    />
  ));

  return (
    <div className="cities">
      <h2 className="cities__title">Added Locations:</h2>
      {!!favoriteItems && <ul className="cities__list">{favoriteItems}</ul>}
    </div>
  );
});

export { FavoriteCities };
