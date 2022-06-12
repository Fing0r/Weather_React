import {getUrl} from "./utils";
import {CONFIG} from "./config";
import {IForecastData} from "./components/types/Weather";

interface IGetCurrentWeather {
    [property: string]: string | number
}

export async function getCurrentWeather(city: string):Promise<Promise<IGetCurrentWeather> | null> {
    if (!city) return null;
    const url = getUrl(city, CONFIG.WEATHER);
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ошибка запроса")

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
    } = await response.json();

    return {date, feelsLike, temp, main, icon, name, sunrise, sunset}
}

export async function getForecast(city: string) {
    if (!city) return;
    const url = getUrl(city, CONFIG.FORECAST);
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ошибка запроса");
    const {list} = await response.json();

    return list.map((item: IForecastData) => createForecastItem(item))
}

function createForecastItem(item: IForecastData) {
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


