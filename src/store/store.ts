import { configureStore } from "@reduxjs/toolkit";
import weatherApp from "./reducers/reducers";

const store = configureStore({ reducer: weatherApp });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
