import {combineReducers, createStore} from "redux";
import profileReducer from "./profileRecucer";
import messagesReducer from "./messagesRecucer";
import sidebarReducer from "./sidebarRecucer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);
export default store;
