import {MouseEventHandler, ReactNode} from "react"

export interface IForecastDataList {
    list: IForecastData[]
}

export interface IWeatherItem {
    date?: number
    feelsLike?: number
    temp?: number
    sunrise?: number
    sunset?: number
    main?: string
    icon?: string
    name?: string
}

export interface IForecastItem {
    date: number
    temp?: number
    feelsLike?: number
    main?: string
    icon?: string
}

export interface ITabItem {
    tabItem: string
    activeTab: string
    children: ReactNode
}

export interface IForecastData {
    dt: number,
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

export interface IWeatherData {
    dt: number,
    main: {
        temp: number,
        feels_like: number,
    },
    name: string,
    weather: {
        0: {
            main: string,
            icon: string,
        },
    },
    sys: {
        sunrise: number,
        sunset: number,
    },
}

export interface IButtonToggleFavorite {
    isFavorite: Boolean | null
    onClick: MouseEventHandler<HTMLButtonElement>
}

export interface ITabBtn {
    activeTab: string
    tabBtn: string
    label: string
    handleChangeTab: (index: string) => void
}
