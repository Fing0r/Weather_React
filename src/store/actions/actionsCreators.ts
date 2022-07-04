const actionCreator = (type: string) => (payload: unknown) => ({
    type,
    payload,
});

export default actionCreator;

// export function toggleCity(city: string) {
//     return {type: CitiesActionTypes.TOGGLE_CITY, city}
// }
// export function addCity(city: string) {
//     return {type: CitiesActionTypes.ADD_CITY, city}
// }
// export function removeCity(city: string) {
//     return {type: CitiesActionTypes.REMOVE_CITY, city}
// }
// export function selectedCity(city: string) {
//     return {type: CitiesActionTypes.SELECTED_CITY, city}
// }
// export function setWeather(payload: IWeatherItem) {
//     return {type: WeatherActionTypes.SET_WEATHER, payload}
// }
// export function setForecast(payload: IForecastItem[]) {
//     return {type: WeatherActionTypes.SET_FORECAST, payload}
// }
// export function updateStats(city?: string) {
//     return {type: StatsActionTypes.UPDATE_STATS, city}
// }
