import {IForecastData, IForecastItem, IWeatherItem} from "@/components/types/Weather";
import {CitiesActionTypes, StatsActionTypes, WeatherActionTypes} from "./actions";

export interface IRootState {
    cities: CitiesState
    weather: WeatherInfoState
    stats: StatsState
}

export interface CitiesState {
    cities: string[],
    selected: string
}

export interface WeatherInfoState {
    weather: IWeatherItem
    forecast: IForecastItem[]
}

interface AddCityAction {
    type: CitiesActionTypes.ADD_CITY
    city: string
}
interface RemoveCityAction {
    type: CitiesActionTypes.REMOVE_CITY
    city: string
}
interface SelectedCityAction {
    type: CitiesActionTypes.SELECTED_CITY
    city: string
}
interface ToggleCityAction {
    type: CitiesActionTypes.TOGGLE_CITY
    city: string
}

interface SetWeatherAction {
    type: WeatherActionTypes.SET_WEATHER
    payload: IWeatherItem
}

interface SetForecastAction {
    type: WeatherActionTypes.SET_FORECAST
    payload: IForecastData[]
}

export type CitiesAction = AddCityAction | RemoveCityAction | SelectedCityAction | ToggleCityAction;
export type WeatherAction = SetWeatherAction | SetForecastAction;
export type StatsAction = UpdateStatsAction | GetStatsAction


export interface StatsState {
    userStats: IStats
}

interface IStats {
    [property: string]: number
}

interface UpdateStatsAction {
    type: StatsActionTypes.UPDATE_STATS
    city: string
}

interface GetStatsAction {
    type: StatsActionTypes.GET_STAT
}
