import { createSlice } from '@reduxjs/toolkit';

import { CitiesSchema } from '../types/cities';

const initialState: CitiesSchema = {
  favoriteCities: [],
  selected: '',
};

const favoriteCitiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    removeCity(state, action) {
      state.favoriteCities = state.favoriteCities.filter(
        (city) => city !== action.payload,
      );
    },
    toggleCity(state, action) {
      if (!state.favoriteCities.includes(action.payload)) {
        state.favoriteCities.push(action.payload);
      } else {
        state.favoriteCities = state.favoriteCities.filter(
          (city) => city !== action.payload,
        );
      }
    },
    chooseCity(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { reducer: favoriteCitiesReducer } = favoriteCitiesSlice;

export const { removeCity, toggleCity, chooseCity } =
  favoriteCitiesSlice.actions;
