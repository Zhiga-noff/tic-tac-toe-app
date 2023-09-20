import { ticTacToeArray } from '../../constants/tic-tac-toe-array';

export const initialState = ticTacToeArray;

export const arrayReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CLICK_TO_FIELD': {
      return state.map((item, index) => {
        if (index === payload.index) {
          return payload.type;
        }
        return item;
      });
    }
    case 'RESET_GAME':
        console.log(111);
      return ticTacToeArray;
    default:
      return state;
  }
};
