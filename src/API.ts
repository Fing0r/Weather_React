import {IForecastData, IForecastItem, IWeatherData, IWeatherItem} from "./components/types/Weather";
import axiosInstance from "./api/routes"

export async function getCurrentWeather(city: string) {
    try {
        const {data} = await axiosInstance.getWeather(city);
        return createWeatherItem(data)
    } catch (e) {
        throw e
    }
}

export async function getForecast(city: string) {
    try {
        const {data: {list}} = await axiosInstance.getForecast(city)
        return list.map((item: IForecastData) => createForecastItem(item))
    } catch (e) {
        throw e
    }
}

function createForecastItem(item: IForecastData): IForecastItem {
    const {
        dt: date,
        main: {
            temp,
            feels_like: feelsLike,
        },
        weather: {
            0: {
                main,
                icon,
            },
        },
    } = item;

    return {date, temp, feelsLike, main, icon}
}

function createWeatherItem(item: IWeatherData): IWeatherItem {
    const {
        dt: date,
        main: {
            temp,
            feels_like: feelsLike,
        },
        name,
        weather: {
            0: {
                main,
                icon,
            },
        },
        sys: {
            sunrise,
            sunset,
        },
    } = item

    return {date, feelsLike, temp, main, icon, name, sunrise, sunset}
}

