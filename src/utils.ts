import {CONFIG, STORAGE} from "./config";
import { format } from "date-fns";

export function getDataFromStorage(storage: string, reserve = "[]") {
    const getJSONFromStorage = localStorage.getItem(storage) ?? reserve
    return JSON.parse(getJSONFromStorage)
}

export function updateWeatherStatistics(city?: string | number) {
    if  (typeof city === "undefined") return;
    const statistics = {...getDataFromStorage(STORAGE.USER_STATS)}
    statistics[city] = statistics[city] ? statistics[city] + 1 : 1
    updateDataFromStorage(STORAGE.USER_STATS, statistics)
}

export function updateDataFromStorage(storage: string, data: string[] | string) {
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
