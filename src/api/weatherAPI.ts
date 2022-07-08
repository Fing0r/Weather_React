import { IForecastData, IForecastItem, IWeatherData, IWeatherItem } from "@/types/Weather";

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
