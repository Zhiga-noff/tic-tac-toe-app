export const initialState = { resetFlag: false };

export const resetReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'REVERSE_FLAG': {
      return {
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
