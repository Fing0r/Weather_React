import { createSlice } from "@reduxjs/toolkit";
import { CurrentWeatherState } from "@/types/store";
import fetchCurrentWeather from "@/store/asyncActions/currentWeather";

const initialState: CurrentWeatherState = {
    weather: {},
};

const currentWeatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCurrentWeather.fulfilled.type]: (state, action) => {
            state.weather = { ...action.payload };
        },
        [fetchCurrentWeather.rejected.type]: (state, action) => {
            console.log("=> action", action);
        },
    },
});

export default currentWeatherSlice.reducer;
