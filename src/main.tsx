import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";
import App from "./App";
import setupStore from "@/store/store";

const store = setupStore();
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
);
