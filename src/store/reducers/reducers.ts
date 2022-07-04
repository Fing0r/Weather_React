import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import weatherReducer from "./weatherReducer";
import statsReducer from "./statsReducer";

const weatherApp = combineReducers({
    cities: citiesReducer,
    weather: weatherReducer,
    stats: statsReducer,
});

export default weatherApp;
