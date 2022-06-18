import {WeatherAction, WeatherInfoState} from "../types";
import {WeatherActionTypes} from "../actions";

const initialState: WeatherInfoState = {
    weather: {},
    forecast: []
}

function weatherReducer(state = initialState, action: WeatherAction) {
    switch (action.type) {
        case WeatherActionTypes.SET_WEATHER:
            return {...state, weather: {...action.payload}}
        case WeatherActionTypes.SET_FORECAST:
            return {...state, forecast: [...action.payload]}
        default:
            return state
    }
}

export default weatherReducer
