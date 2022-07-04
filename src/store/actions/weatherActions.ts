import actionCreator from "@/store/actions/actionsCreators";

export enum WeatherActionTypes {
    SET_WEATHER = "SET_WEATHER",
    SET_FORECAST = "SET_FORECAST",
}

export const setWeather = actionCreator(WeatherActionTypes.SET_WEATHER);
export const setForecast = actionCreator(WeatherActionTypes.SET_FORECAST);
