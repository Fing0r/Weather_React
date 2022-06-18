import {getDataFromStorage} from "@/utils";
import {STORAGE} from "@/config";
import {CitiesAction, CitiesState} from "../types";
import {CitiesActionTypes} from "../actions";

const cities = getDataFromStorage(STORAGE.FAVORITE_CITIES);
const selected = getDataFromStorage(STORAGE.SELECTED_CITY);

const initialState: CitiesState = {
    cities: [...cities],
    selected
}

function citiesReducer(state = initialState, action:CitiesAction) {
    switch (action.type) {
        case CitiesActionTypes.ADD_CITY:
            return {...state, cities: [...state.cities, action.city]};
        case CitiesActionTypes.REMOVE_CITY:
            return {...state, cities: state.cities.filter((item) => item !== action.city)};
        case CitiesActionTypes.TOGGLE_CITY:
            if (!state.cities.includes(action.city)) return {...state, cities: [...state.cities, action.city]};
            return {...state, cities: state.cities.filter((item) => item !== action.city)};
        case CitiesActionTypes.SELECTED_CITY:
            return {...state, selected: action.city}
        default:
            return state
    }
}

export default citiesReducer
