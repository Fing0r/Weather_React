import { IForecastItem, IWeatherItem } from "@/types/Weather";

export interface IRootState {
    cities: CitiesState;
    currentWeather: CurrentWeatherState;
    forecast: ForecastState;
    stats: StatsState;
}

export interface CitiesState {
    cities: string[];
    selected: string;
}

export interface CurrentWeatherState {
    weather: IWeatherItem;
}

export interface ForecastState {
    forecast: IForecastItem[];
}

export interface StatsState {
    userStats: IStats;
}

export interface IStats {
    [property: string]: number;
}
