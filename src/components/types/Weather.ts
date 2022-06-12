import {Dispatch, MouseEventHandler, SetStateAction} from "react"

export interface ICityWeather {
    date?: number | null
    temp?: number | null
    feelsLike?: number | null
    icon?: string | null
    name?: string | null
    main?: string | null
    sunrise?: number | null
    sunset?: number | null
}

export interface ICityForecast {
    date: number | null
    temp: number | null
    feelsLike: number | null
    main: string | null
    icon: string | null
}

export interface ICitySearchForm {
    setCityInfo: Dispatch<SetStateAction<ICityWeather | null>>
    setCityForecast: Dispatch<SetStateAction<ICityForecast[] | null>>
}

export interface IInfoWeather {
    cityInfo: ICityWeather | null
    cityForecast: ICityForecast[] | null
    setFavoriteCity: Dispatch<SetStateAction<Set<string>>>
}

export interface INowWeather {
    cityInfo: ICityWeather | null
    setFavoriteCity: Dispatch<SetStateAction<Set<string>>>
}

export interface IForecastWeather{
    cityForecast: ICityForecast[] | null
    cityName?: string | null
}

export interface IFavoriteCities{
    favoriteCities: Set<string>
    setCityInfo: Dispatch<SetStateAction<ICityWeather | null>>
    setFavoriteCities: Dispatch<SetStateAction<Set<string>>>
    setCityForecast: Dispatch<SetStateAction<ICityForecast[] | null>>
}

export interface IForecastData {
    dt: string,
    main: {
        temp: number,
        feels_like: number,
    },
    weather: {
        0: {
            main: string,
            icon: string,
        },
    },
}

export interface IButtonToggleFavorite {
    toggleFavoriteCity: MouseEventHandler<HTMLButtonElement>
}
