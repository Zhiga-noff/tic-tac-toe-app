import { reducer } from './reducer';

const createStore = (reducer) => {
    let state;

    return {
        dispatch: (action) => {
            state = reducer(state, action);
        },
        getState: () => state,
    };
};

export const store = createStore(reducer);

store.dispatch({});
