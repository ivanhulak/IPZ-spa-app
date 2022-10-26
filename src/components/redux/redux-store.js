import {createStore, combineReducers, applyMiddleware} from 'redux';
import membersReducer from './members-reducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
   membersPage: membersReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;