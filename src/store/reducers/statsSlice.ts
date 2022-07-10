import { createSlice } from "@reduxjs/toolkit";
import { StatsState } from "@/types/store";

const initialState: StatsState = {
    userStats: {},
};

const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        updateStats(state, action) {
            const currentCount = state.userStats[action.payload];
            state.userStats[action.payload] = currentCount ? currentCount + 1 : 1;
        },
    },
});

export default statsSlice.reducer;

export const { updateStats } = statsSlice.actions;
