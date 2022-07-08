import { createAsyncThunk } from "@reduxjs/toolkit";
import { createForecastItem } from "@/api/weatherAPI";
import { IForecastData } from "@/types/Weather";
import axiosInstance from "@/api/routes";
import { selectedCity } from "@/store/reducers/citiesSlice";

const fetchForecast = createAsyncThunk(
    "forecast/get",
    async (city: string, { rejectWithValue, dispatch }) => {
        try {
            const {
                data: { list },
            } = await axiosInstance.getForecast(city);

            return list.map((item: IForecastData) => createForecastItem(item));
        } catch (e) {
            dispatch(selectedCity(""));
            return rejectWithValue(e.data.message);
        }
    },
);

export default fetchForecast;
