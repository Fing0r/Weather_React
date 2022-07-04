import { setForecast } from "../actions/weatherActions";
import { createForecastItem } from "@/api/WeatherAPI";
import { IForecastData } from "@/types/Weather";
import axiosInstance from "@/api/routes";
import { selectedCity } from "@/store/actions/citiesActions";

const fetchForecast = (city: string) => {
    return (dispatch: (arg0: { type: string; payload: unknown }) => void) => {
        axiosInstance
            .getForecast(city)
            .then(({ data: { list } }) => {
                const createItems = list.map((item: IForecastData) => createForecastItem(item));
                dispatch(setForecast(createItems));
            })
            .catch((e) => {
                dispatch(selectedCity(""));
                console.error(e);
            });
    };
};

export default fetchForecast;
