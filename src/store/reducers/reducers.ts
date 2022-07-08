import { combineReducers } from "redux";
import citiesSlice from "./citiesSlice";
import statsSlice from "./statsSlice";
import currentWeatherSlice from "./currentWeatherSlice";
import forecastSlice from "@/store/reducers/forecastSlice";

const weatherApp = combineReducers({
    cities: citiesSlice,
    stats: statsSlice,
    currentWeather: currentWeatherSlice,
    forecast: forecastSlice,
});

export default weatherApp;
