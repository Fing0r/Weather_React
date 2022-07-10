import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import weatherApp from "./reducers/reducers";

export default function setupStore() {
    return configureStore({
        reducer: weatherApp,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });
}

export type RootState = ReturnType<typeof weatherApp>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
