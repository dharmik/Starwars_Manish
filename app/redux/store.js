import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import characterReducer from './reducer';
const rootReducer = combineReducers({
  characterReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
