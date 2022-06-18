import {getDataFromStorage} from "@/utils";
import {STORAGE} from "@/config";
import {StatsActionTypes} from "@/store/actions";
import {StatsAction, StatsState} from "@/store/types";

const statistics = getDataFromStorage(STORAGE.USER_STATS);

const initialState: StatsState = {
    userStats: {...statistics},
}

function statsReducer(state = initialState, action: StatsAction) {
    switch (action.type) {
        case StatsActionTypes.UPDATE_STATS:
            const currentCount = state.userStats[action.city];
            const count = currentCount ? currentCount + 1 : 1;
            return {...state, userStats: {...state.userStats, [action.city]: count}};
        default:
            return state;
    }
}

export default statsReducer;
