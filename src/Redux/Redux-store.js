import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileRecucer";
import messagesReducer from "./messagesRecucer";
import sidebarReducer from "./sidebarRecucer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage:userReducer,
    auth:authReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
