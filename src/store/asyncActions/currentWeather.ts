import { createAsyncThunk } from "@reduxjs/toolkit";
import { createWeatherItem } from "@/api/weatherAPI";
import axiosInstance from "@/api/routes";
import { selectedCity } from "@/store/reducers/citiesSlice";
import { updateStats } from "@/store/reducers/statsSlice";

const fetchCurrentWeather = createAsyncThunk(
    "weather/get",
    async (city: string, { rejectWithValue, dispatch }) => {
        try {
            const {
                data,
                data: { name },
            } = await axiosInstance.getWeather(city);

            dispatch(updateStats(name));

            return createWeatherItem(data);
        } catch (e) {
            dispatch(selectedCity(""));
            // @ts-ignore
            return rejectWithValue(e.data.message);
        }
    },
);

export default fetchCurrentWeather;
