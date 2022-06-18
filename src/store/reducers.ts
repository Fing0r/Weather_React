import {combineReducers} from "redux";
import citiesReducer from "./reducers/citiesReducer";
import weatherReducer from "./reducers/weatherReducer";
import statsReducer from "./reducers/statsReducer";

const weatherApp = combineReducers({
    cities: citiesReducer,
    weather: weatherReducer,
    stats: statsReducer
})

export default weatherApp
