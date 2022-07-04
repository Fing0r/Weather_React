import actionCreator from "@/store/actions/actionsCreators";

export enum CitiesActionTypes {
    ADD_CITY = "ADD_CITY",
    REMOVE_CITY = "REMOVE_CITY",
    TOGGLE_CITY = "TOGGLE_CITY",
    SELECTED_CITY = "SELECTED_CITY",
}

export const addCity = actionCreator(CitiesActionTypes.ADD_CITY);
export const removeCity = actionCreator(CitiesActionTypes.REMOVE_CITY);
export const selectedCity = actionCreator(CitiesActionTypes.SELECTED_CITY);
export const toggleCity = actionCreator(CitiesActionTypes.TOGGLE_CITY);
