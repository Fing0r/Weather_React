import API from "./api";
import { getUrl } from "@/utils/utils";
import { CONFIG } from "@/settings/config";
import { IForecastDataList, IWeatherData } from "@/types/Weather";

export default {
    getWeather(city: string) {
        const url = getUrl(city, CONFIG.WEATHER);
        return API().get<IWeatherData>(url);
    },
    getForecast(city: string) {
        const url = getUrl(city, CONFIG.FORECAST);
        return API().get<IForecastDataList>(url);
    },
};
