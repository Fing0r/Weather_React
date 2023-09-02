import { createAsyncThunk } from '@reduxjs/toolkit';

import { chooseCity } from '../slice/favoriteCitiesSlice';

import {
  forecastFactory,
  WeatherForecastDataList,
  WeatherForecastData,
} from '@/entities/WeatherForecast';
import { $api } from '@/shared/api/api';
import { CONFIG } from '@/shared/const/config';
import { getUrl } from '@/shared/lib/utils/utils';

const fetchForecast = createAsyncThunk(
  'forecast/fetchForecast',
  async (city: string, { rejectWithValue, dispatch }) => {
    try {
      const url = getUrl(city, CONFIG.FORECAST);
      const {
        data: { list },
      } = await $api.get<WeatherForecastDataList>(url);

      return list.map((item: WeatherForecastData) => forecastFactory(item));
    } catch (e) {
      dispatch(chooseCity(''));
      // @ts-ignore
      return rejectWithValue(e.data.message);
    }
  },
);

export { fetchForecast };
