const initialState = 'circle';

export const typeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'NEW_TYPE':
      return payload;
    default:
      return state;
  }
};
