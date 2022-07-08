import { createSlice } from "@reduxjs/toolkit";
import { STORAGE } from "@/settings/config";
import { CitiesState } from "@/types/store";
import { getDataFromStorage } from "@/utils/storageUtils";

const cities = getDataFromStorage(STORAGE.FAVORITE_CITIES);
const selected = getDataFromStorage(STORAGE.SELECTED_CITY);

const initialState: CitiesState = {
    cities: [...cities],
    selected,
};

const citiesSlice = createSlice({
    name: "cities",
    initialState,
    reducers: {
        addCity(state, action) {
            state.cities.push(action.payload);
        },
        removeCity(state, action) {
            state.cities = state.cities.filter((city) => city !== action.payload);
        },
        toggleCity(state, action) {
            if (!state.cities.includes(action.payload)) {
                state.cities.push(action.payload);
            } else {
                state.cities = state.cities.filter((city) => city !== action.payload);
            }
        },
        selectedCity(state, action) {
            state.selected = action.payload;
        },
    },
});

export default citiesSlice.reducer;

export const { removeCity, toggleCity, selectedCity, addCity } = citiesSlice.actions;
