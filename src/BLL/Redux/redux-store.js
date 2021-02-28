import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './ProfileReducer/profile-reducer';
import dialogsReducer from './DialogsReducer/dialogs-reducer';
import usersReducer from './UsersReducer/users-reducer';
import authReducer from './AuthReducer/auth-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({ profilePage: profileReducer, chatPage: dialogsReducer, usersPage: usersReducer, auth: authReducer });
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
