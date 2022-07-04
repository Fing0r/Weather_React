import { STORAGE } from "@/settings/config";

export function getDataFromStorage(storage: string, reserve = "[]") {
    const getJSONFromStorage = localStorage.getItem(storage) ?? reserve;
    return JSON.parse(getJSONFromStorage);
}

export function updateWeatherStatistics(city?: string | number) {
    if (typeof city === "undefined") return;
    const statistics = { ...getDataFromStorage(STORAGE.USER_STATS) };
    statistics[city] = statistics[city] ? statistics[city] + 1 : 1;
    updateDataFromStorage(STORAGE.USER_STATS, statistics);
}

export function updateDataFromStorage(storage: string, data: string[] | string) {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem(storage, dataJSON);
}
