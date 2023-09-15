import { ticTacToeArray } from '../../constants/tic-tac-toe-array';

export const initialState = {
  resetFlag: false,
  array: ticTacToeArray,
  type: 'circle',
};

export const megaReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CLICK_TO_FIELD': {
      return {
        ...state,
        array: state.array.map((item, index) => {
          if (index === payload.index) {
            return payload.type;
          }
          return item;
        }),
      };
    }
    case 'NEW_TYPE':
      return { ...state, type: payload };
    case 'REVERSE_FLAG': {
      return {
        ...state,
        resetFlag: !state.resetFlag,
      };
    }
    case 'FALSE_FLAG': {
      return { ...state, resetFlag: false };
    }
    default:
      return state;
  }
};
