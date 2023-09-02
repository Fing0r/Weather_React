import React, { FormEvent, memo, useCallback, useState } from 'react';

import { fetchCurrentWeather } from '../../model/services/fetchCurrentWeather';
import { fetchForecast } from '../../model/services/fetchForecast';
import { chooseCity } from '../../model/slice/favoriteCitiesSlice';

import cls from './SearchForm.module.scss';

import SearchIcon from '@/shared/assets/icons/search.svg';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

const SearchForm = memo(() => {
  const [cityName, setCityName] = useState('');
  const dispatch = useAppDispatch();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      dispatch(fetchCurrentWeather(cityName));
      dispatch(fetchForecast(cityName));
      dispatch(chooseCity(cityName));
      setCityName('');
    },
    [dispatch, cityName],
  );

  return (
    <form className={cls.search} onSubmit={handleSubmit}>
      <Input
        placeholder="Enter the name of the city"
        value={cityName}
        onChange={onChange}
        type="search"
      />
      <Button className={cls.search__btn}>
        <SearchIcon />
      </Button>
    </form>
  );
});

export { SearchForm };
