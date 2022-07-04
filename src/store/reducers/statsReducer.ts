import { STORAGE } from "@/settings/config";
import { StatsAction, StatsState } from "@/types/store";
import { getDataFromStorage } from "@/utils/storageUtils";
import { StatsActionTypes } from "@/store/actions/statsActions";

const statistics = getDataFromStorage(STORAGE.USER_STATS);

const initialState: StatsState = {
    userStats: { ...statistics },
};

function statsReducer(state = initialState, action: StatsAction) {
    switch (action.type) {
        case StatsActionTypes.UPDATE_STATS:
            const currentCount = state.userStats[action.city];
            const count = currentCount ? currentCount + 1 : 1;
            return { ...state, userStats: { ...state.userStats, [action.city]: count } };
        default:
            return state;
    }
}

export default statsReducer;
