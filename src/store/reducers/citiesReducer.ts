import { STORAGE } from "@/settings/config";
import { CitiesAction, CitiesState } from "@/types/store";
import { getDataFromStorage } from "@/utils/storageUtils";
import { CitiesActionTypes } from "@/store/actions/citiesActions";

const cities = getDataFromStorage(STORAGE.FAVORITE_CITIES);
const selected = getDataFromStorage(STORAGE.SELECTED_CITY);

const initialState: CitiesState = {
    cities: [...cities],
    selected,
};

function citiesReducer(state = initialState, action: CitiesAction) {
    switch (action.type) {
        case CitiesActionTypes.ADD_CITY:
            return { ...state, cities: [...state.cities, action.payload] };
        case CitiesActionTypes.REMOVE_CITY:
            return {
                ...state,
                cities: state.cities.filter((item) => item !== action.payload),
            };
        case CitiesActionTypes.TOGGLE_CITY:
            if (!state.cities.includes(action.payload)) {
                return { ...state, cities: [...state.cities, action.payload] };
            }
            return {
                ...state,
                cities: state.cities.filter((item) => item !== action.payload),
            };
        case CitiesActionTypes.SELECTED_CITY:
            return { ...state, selected: action.payload };
        default:
            return state;
    }
}

export default citiesReducer;
