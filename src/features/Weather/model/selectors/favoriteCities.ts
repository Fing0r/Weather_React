import { StateSchema } from "@/app/providers/StoreProvider";

export const getSelectedCity = (state: StateSchema) => state.favoriteCities?.selected;
export const getFavoriteCities = (state: StateSchema) => state.favoriteCities?.favoriteCities;
export const getWeather = (state: StateSchema) => state.currentWeather.weather;
export const getForecast = (state: StateSchema) => state.forecast.forecast;
