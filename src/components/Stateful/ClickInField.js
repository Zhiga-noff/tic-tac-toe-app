import { CellField } from '../Stateless/CellField';
import { useState } from 'react';
import style from '../CellField.module.css';
import PropTypes from 'prop-types';
import { isWin } from '../../modules';
import { useDispatch, useSelector } from 'react-redux';
import { selectArray, selectReset, selectType } from '../../store/selectors';
import { clickToFieldAction, newTypeAction } from '../../store/actions';

export const ClickInField = ({ dataIndex }) => {
  // Первоначальный тип указанный во всех полях
  const [type, setType] = useState('');

  // Флаг на проверку, что бы нельзя было нажать дважды на поле
  const [flag, setFlag] = useState(false);

  const arrClickResult = useSelector(selectArray);
  const reset = useSelector(selectReset);
  const typeField = useSelector(selectType);

  const dispatch = useDispatch();

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
    dispatch(clickToFieldAction(dataIndex, typeField));
    if (typeField === 'circle') {
      dispatch(newTypeAction('chest'));
    } else {
      dispatch(newTypeAction('circle'));
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
