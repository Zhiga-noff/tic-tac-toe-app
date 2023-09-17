const initialState = false;

export const resetReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'REVERSE_FLAG': {
      return !state;
    }
    case 'FALSE_FLAG': {
      return false;
    }
    default:
      return state;
  }
};
