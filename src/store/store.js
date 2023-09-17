import { combineReducers, legacy_createStore as createStore } from 'redux';
import { arrayReducer, resetReducer, typeReducer } from './reducers';

const rootReducer = combineReducers({
  resetState: resetReducer,
  arrayState: arrayReducer,
  typeState: typeReducer,
});

export const store = createStore(rootReducer);
