import { createSlice } from '@reduxjs/toolkit';

import { StatsSchema } from '@/pages/StatisticPage/model/types/stats';

const initialState: StatsSchema = {
  userStats: {},
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    updateStats(state, action) {
      const currentCount = state.userStats[action.payload];
      state.userStats[action.payload] = currentCount ? currentCount + 1 : 1;
    },
  },
});

export const { reducer: statsReducer } = statsSlice;

export const { updateStats } = statsSlice.actions;
