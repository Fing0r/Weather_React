import { setWeather } from "../actions/weatherActions";
import { createWeatherItem } from "@/api/WeatherAPI";
import axiosInstance from "@/api/routes";
import { selectedCity } from "@/store/actions/citiesActions";

const fetchCurrentWeather = (city: string) => {
    return (dispatch: (arg0: { type: string; payload: unknown }) => void) => {
        axiosInstance
            .getWeather(city)
            .then(({ data }) => {
                const createItem = createWeatherItem(data);
                dispatch(setWeather(createItem));
            })
            .catch((e) => {
                dispatch(selectedCity(""));
                console.error(e);
            });
    };
};

export default fetchCurrentWeather;
