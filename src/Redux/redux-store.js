import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogReducer
});

let store = legacy_createStore(reducers);

export default store;