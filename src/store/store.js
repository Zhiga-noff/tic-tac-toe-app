import { legacy_createStore as createStore } from 'redux';
import { resetReducer } from './reducers/resetReducer';
import { arrayReducer } from './reducers/arrayReducer';
import { megaReducer } from './reducers/megaReducer';

export const store = createStore(megaReducer);
