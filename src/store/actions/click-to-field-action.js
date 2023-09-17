export const clickToFieldAction = (dataIndex, type) => {
  return {
    type: 'CLICK_TO_FIELD',
    payload: { index: dataIndex, type: type },
  };
};
