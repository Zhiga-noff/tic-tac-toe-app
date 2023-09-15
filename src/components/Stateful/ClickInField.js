import { CellField } from '../Stateless/CellField';
import { useState } from 'react';
import style from '../CellField.module.css';
import PropTypes from 'prop-types';
import { isWin } from '../../modules/is-win-function';
import { store } from '../../store/store';

export const ClickInField = ({ dataIndex }) => {
  // Первоначальный тип указанный во всех полях
  const [type, setType] = useState('');

  // Флаг на проверку, что бы нельзя было нажать дважды на поле
  const [flag, setFlag] = useState(false);

  const arrClickResult = store.getState().array;

  const reset = store.getState().resetFlag;

  const typeField = store.getState().type;

  // Установка стиля в зависимости от типа круг или крест
  function isClassType() {
    if (type) {
      return `${style[type]}`;
    }
  }

  function isReset() {
    if (reset) {
      setType('');
      setFlag(false);
    }
  }

  // Функция для клика
  function isNoneClick() {
    // Если тру тогда нажимать нельзя
    if (flag || isWin(arrClickResult)) {
      return;
    }
    setFlag(true);
    setType(typeField);
    store.dispatch({
      type: 'CLICK_TO_FIELD',
      payload: { index: dataIndex, type: typeField },
    });
    if (typeField === 'circle') {
      store.dispatch({ type: 'NEW_TYPE', payload: 'chest' });
    } else {
      store.dispatch({ type: 'NEW_TYPE', payload: 'circle' });
    }
  }

  return (
    <CellField
      type={type}
      dataIndex={dataIndex}
      isNoneClick={isNoneClick}
      isClassType={isClassType}
      isReset={isReset}
    />
  );
};

ClickInField.propTypes = {
  typeField: PropTypes.string,
  setTypeField: PropTypes.func,
  arr: PropTypes.array,
  setArr: PropTypes.func,
  dataIndex: PropTypes.number,
};
