import { IForecastData, IForecastItem, IWeatherData, IWeatherItem } from "@/types/Weather";
import axiosInstance from "./routes";

export function createForecastItem(item: IForecastData): IForecastItem {
    const {
        dt: date,
        main: { temp, feels_like: feelsLike },
        weather: {
            0: { main, icon },
        },
    } = item;

    return { date, temp, feelsLike, main, icon };
}

export function createWeatherItem(item: IWeatherData): IWeatherItem {
    const {
        dt: date,
        main: { temp, feels_like: feelsLike },
        name,
        weather: {
            0: { main, icon },
        },
        sys: { sunrise, sunset },
    } = item;

    return { date, feelsLike, temp, main, icon, name, sunrise, sunset };
}

export async function getCurrentWeather(city: string) {
    const { data } = await axiosInstance.getWeather(city);
    return createWeatherItem(data);
}

export async function getForecast(city: string) {
    const {
        data: { list },
    } = await axiosInstance.getForecast(city);
    return list.map((item: IForecastData) => createForecastItem(item));
}
