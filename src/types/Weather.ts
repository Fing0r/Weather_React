import { MouseEventHandler } from "react";

export interface IWeatherItem {
    date?: number;
    feelsLike?: number;
    temp?: number;
    sunrise?: number;
    sunset?: number;
    main?: string;
    icon?: string;
    name?: string;
}

export interface IFavoriteCitiesItem {
    label: string;
    getTargetWeather: (label: string) => void;
    deleteFavoriteCity: (label: string) => void;
}

export interface IForecastItem {
    date: number;
    temp?: number;
    feelsLike?: number;
    main?: string;
    icon?: string;
}

export interface IForecastData {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
    };
    weather: {
        0: {
            main: string;
            icon: string;
        };
    };
}

export interface IForecastDataList {
    list: IForecastData[];
}

export interface IWeatherData {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
    };
    name: string;
    weather: {
        0: {
            main: string;
            icon: string;
        };
    };
    sys: {
        sunrise: number;
        sunset: number;
    };
}

export interface IButtonToggleFavorite {
    isFavorite: boolean | null;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
