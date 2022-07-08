import { IRootState } from "@/types/store";

export const selectSelected = (state: IRootState) => state.cities.selected;
export const selectWeather = (state: IRootState) => state.currentWeather.weather;
export const selectForecast = (state: IRootState) => state.forecast.forecast;
export const selectCities = (state: IRootState) => state.cities.cities;
export const selectStats = (state: IRootState) => state.stats.userStats;
