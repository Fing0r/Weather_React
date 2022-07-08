import { createSlice } from "@reduxjs/toolkit";
import { STORAGE } from "@/settings/config";
import { StatsState } from "@/types/store";
import { getDataFromStorage } from "@/utils/storageUtils";

const statistics = getDataFromStorage(STORAGE.USER_STATS);

const initialState: StatsState = {
    userStats: { ...statistics },
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
