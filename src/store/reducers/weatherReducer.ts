import { WeatherAction, WeatherInfoState } from "@/types/store";
import { WeatherActionTypes } from "@/store/actions/weatherActions";

const initialState: WeatherInfoState = {
    weather: {},
    forecast: [],
};

function weatherReducer(state = initialState, action: WeatherAction) {
    switch (action.type) {
        case WeatherActionTypes.GET_WEATHER:
            return state;
        case WeatherActionTypes.GET_FORECAST:
            return state;
        case WeatherActionTypes.SET_WEATHER:
            console.log(action.payload);
            return { ...state, weather: { ...action.payload } };
        case WeatherActionTypes.SET_FORECAST:
            console.log(action.payload);
            return { ...state, forecast: [...action.payload] };
        default:
            return state;
    }
}

export default weatherReducer;
