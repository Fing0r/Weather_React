import {createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension";
import weatherApp from "./reducers";

const store = createStore(weatherApp, composeWithDevTools());

export default store
