import {CONFIG} from "./config";
import { format } from "date-fns";

export const removeFavoriteCity = (prv: string | Set<string>, city: string | null) => new Set([...prv].filter(v => v !== city));
export const addFavoriteCity = (prv:  Set<string>, city: string) => new Set([...prv, city]);
export function getDataFromStorage(storage: string) {
    const getJSONFromStorage = localStorage.getItem(storage) || '[]'
    return JSON.parse(getJSONFromStorage)
}

export function updateDataFromStorage(storage: string, data: string | string[]) {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem(storage, dataJSON);
}

export function getUrl(city: string, type: string) {
    return `${CONFIG.API}${type}?q=${city}&appid=${CONFIG.KEY}&cnt=${CONFIG.NUMBER_FORECASTS}&units=metric`;
}

export function getTime(param: number) {
    return format(new Date(param * 1000), "HH:mm");
}

export function getDate(param: number) {
    return format(new Date(param * 1000), "d LLL");
}
