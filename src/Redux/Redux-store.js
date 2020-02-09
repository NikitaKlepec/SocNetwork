import {combineReducers, createStore} from "redux";
import profileReducer from "./profileRecucer";
import messagesReducer from "./messagesRecucer";
import sidebarReducer from "./sidebarRecucer";
import userReducer from "./userReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage:userReducer
});

let store = createStore(reducers);

window.store = store;
export default store;
