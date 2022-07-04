import { IForecastData, IForecastItem, IWeatherItem } from "@/types/Weather";
import { CitiesActionTypes } from "@/store/actions/citiesActions";
import { WeatherActionTypes } from "@/store/actions/weatherActions";
import { StatsActionTypes } from "@/store/actions/statsActions";

export interface IRootState {
    cities: CitiesState;
    weather: WeatherInfoState;
    stats: StatsState;
}

export interface CitiesState {
    cities: string[];
    selected: string;
}

export interface WeatherInfoState {
    weather: IWeatherItem;
    forecast: IForecastItem[];
}

interface AddCityAction {
    type: CitiesActionTypes.ADD_CITY;
    payload: string;
}

interface RemoveCityAction {
    type: CitiesActionTypes.REMOVE_CITY;
    payload: string;
}

interface SelectedCityAction {
    type: CitiesActionTypes.SELECTED_CITY;
    payload: string;
}

interface ToggleCityAction {
    type: CitiesActionTypes.TOGGLE_CITY;
    payload: string;
}

interface SetWeatherAction {
    type: WeatherActionTypes.SET_WEATHER;
    payload: IWeatherItem;
}

interface SetForecastAction {
    type: WeatherActionTypes.SET_FORECAST;
    payload: IForecastData[];
}

interface GetWeatherAction {
    type: WeatherActionTypes.GET_WEATHER;
    payload: IWeatherItem;
}

interface GetForecastAction {
    type: WeatherActionTypes.GET_FORECAST;
    payload: IForecastData[];
}

export type CitiesAction = AddCityAction | RemoveCityAction | SelectedCityAction | ToggleCityAction;
export type StatsAction = UpdateStatsAction | GetStatsAction;
export type WeatherAction =
    | SetWeatherAction
    | SetForecastAction
    | GetForecastAction
    | GetWeatherAction;

export interface StatsState {
    userStats: IStats;
}

interface IStats {
    [property: string]: number;
}

interface UpdateStatsAction {
    type: StatsActionTypes.UPDATE_STATS;
    city: string;
}

interface GetStatsAction {
    type: StatsActionTypes.GET_STAT;
}
