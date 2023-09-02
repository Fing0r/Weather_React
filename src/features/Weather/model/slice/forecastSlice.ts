import { createSlice } from '@reduxjs/toolkit';

import { fetchForecast } from '../services/fetchForecast';
import { ForecastSchema } from '../types/forecast';

const initialState: ForecastSchema = {
  forecast: [],
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.forecast = [];
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        console.log('=> action', action);
      });
  },
});

export const { reducer: forecastReducer } = forecastSlice;
