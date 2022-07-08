import { createSlice } from "@reduxjs/toolkit";
import { ForecastState } from "@/types/store";
import fetchForecast from "@/store/asyncActions/forecast";

const initialState: ForecastState = {
    forecast: [],
};

const forecastSlice = createSlice({
    name: "forecast",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchForecast.fulfilled.type]: (state, action) => {
            state.forecast = action.payload;
        },
        [fetchForecast.rejected.type]: (state, action) => {
            console.log("=> action", action);
        },
    },
});

export default forecastSlice.reducer;
