import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import weatherApp from "./reducers/reducers";

const store = createStore(weatherApp, composeWithDevTools(applyMiddleware(thunk)));

export default store;
