import { createAsyncThunk } from '@reduxjs/toolkit';

import { weatherFactory } from '@/entities/WeatherCurrent';
import { updateStats } from '@/pages/StatisticPage';
import { $api } from '@/shared/api/api';
import { CONFIG } from '@/shared/const/config';
import { getUrl } from '@/shared/lib/utils/utils';

const fetchCurrentWeather = createAsyncThunk(
  'weather/get',
  async (city: string, { rejectWithValue, dispatch }) => {
    try {
      const url = getUrl(city, CONFIG.WEATHER);
      const {
        data,
        data: { name },
      } = await $api.get(url);

      dispatch(updateStats(name));

      return weatherFactory(data);
    } catch (e) {
      // @ts-ignore
      return rejectWithValue(e.data.message);
    }
  },
);

export { fetchCurrentWeather };
