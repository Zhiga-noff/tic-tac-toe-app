import { legacy_createStore as createStore } from 'redux';
import { resetReducer } from './resetReducer';

export const store = createStore(resetReducer);
