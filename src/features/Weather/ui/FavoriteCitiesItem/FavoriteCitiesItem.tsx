import { memo, useCallback } from 'react';

import cls from './FavoriteCitiesItem.module.scss';

import { Button } from '@/shared/ui/Button';

export interface FavoriteCitiesItemProps {
  label: string;
  onClickCity: (label: string) => void;
  onDeleteFavoriteCity: (label: string) => void;
}

const FavoriteCitiesItem = memo((props: FavoriteCitiesItemProps) => {
  const { label, onClickCity, onDeleteFavoriteCity } = props;

  const handleClickDelete = useCallback(
    () => onDeleteFavoriteCity(label),
    [onDeleteFavoriteCity, label],
  );

  const handleClickGetWeather = useCallback(
    () => onClickCity(label),
    [onClickCity, label],
  );

  return (
    <li className={cls.citiesItem}>
      <Button
        className={cls.citiesItem__name}
        type="button"
        onClick={handleClickGetWeather}
      >
        {label}
      </Button>
      <Button
        className={cls.citiesItem__close}
        type="button"
        onClick={handleClickDelete}
      />
    </li>
  );
});

export { FavoriteCitiesItem };
