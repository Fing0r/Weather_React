import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import citiesSlice from "./citiesSlice";
import statsSlice from "./statsSlice";
import currentWeatherSlice from "./currentWeatherSlice";
import forecastSlice from "@/store/reducers/forecastSlice";

const statsPersistConfig = {
    key: "stats",
    storage,
    whitelist: ["userStats"],
};

const citiesPersistConfig = {
    key: "cities",
    storage,
};

const weatherApp = combineReducers({
    cities: persistReducer(citiesPersistConfig, citiesSlice),
    stats: persistReducer(statsPersistConfig, statsSlice),
    currentWeather: currentWeatherSlice,
    forecast: forecastSlice,
});

export default weatherApp;
