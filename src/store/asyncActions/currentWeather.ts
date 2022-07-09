import { createAsyncThunk } from "@reduxjs/toolkit";
import { createWeatherItem } from "@/api/weatherAPI";
import axiosInstance from "@/api/routes";
import { selectedCity } from "@/store/reducers/citiesSlice";
import { updateStats } from "@/store/reducers/statsSlice";
import { STORAGE } from "@/settings/config";
import { updateDataFromStorage } from "@/utils/storageUtils";
import { IRootState } from "@/types/store";

const fetchCurrentWeather = createAsyncThunk(
    "weather/get",
    async (city: string, { getState, rejectWithValue, dispatch }) => {
        try {
            const {
                data,
                data: { name },
            } = await axiosInstance.getWeather(city);

            dispatch(updateStats(name));

            const {
                stats: { userStats },
            } = getState() as IRootState;

            updateDataFromStorage(STORAGE.USER_STATS, userStats);

            return createWeatherItem(data);
        } catch (e) {
            dispatch(selectedCity(""));
            // @ts-ignore
            return rejectWithValue(e.data.message);
        }
    },
);

export default fetchCurrentWeather;
