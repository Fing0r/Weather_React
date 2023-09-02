import { memo, useCallback } from 'react';

import { Button } from '@/shared/ui/Button';
import './styles.scss';

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
    <li className="cities__item">
      <Button
        className="cities__name"
        type="button"
        onClick={handleClickGetWeather}
      >
        {label}
      </Button>
      <Button
        className="cities__close"
        type="button"
        onClick={handleClickDelete}
      />
    </li>
  );
});

export { FavoriteCitiesItem };
