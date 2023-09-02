import { StateSchema } from "@/app/providers/StoreProvider";

export const selectStats = (state: StateSchema) => state.stats.userStats;
