import actionCreator from "@/store/actions/actionsCreators";

export enum StatsActionTypes {
    UPDATE_STATS = "UPDATE_STATS",
    GET_STAT = "GET_STAT",
}

export const updateStats = actionCreator(StatsActionTypes.UPDATE_STATS);
