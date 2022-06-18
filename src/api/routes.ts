import API from "./API"
import {getUrl} from "../utils";
import {CONFIG} from "../config"
import {IForecastData, IForecastDataList, IWeatherData} from "../components/types/Weather";

export default {
    getWeather(city: string) {
        const url = getUrl(city, CONFIG.WEATHER)
        return API().get<IWeatherData>(url)
    },
    getForecast(city: string) {
        const url = getUrl(city, CONFIG.FORECAST)
        return API().get<IForecastDataList>(url)
    }
}
