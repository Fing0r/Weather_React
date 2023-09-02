import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrentWeather } from '../services/fetchCurrentWeather';
import { CurrentWeatherSchema } from '../types/currentWeather';

const initialState: CurrentWeatherSchema = {
  weather: {},
};

const currentWeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrentWeather.fulfilled.type]: (state, action) => {
      state.weather = { ...action.payload };
    },
    [fetchCurrentWeather.rejected.type]: (state, action) => {
      console.log('=> action', action);
    },
  },
});

export const { reducer: currentWeatherReducer } = currentWeatherSlice;
