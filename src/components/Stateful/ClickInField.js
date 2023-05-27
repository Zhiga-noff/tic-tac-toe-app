import { CellField } from '../Stateless/CellField';
import { useState } from 'react';
import style from '../CellField.module.css';

export const ClickInField = ({
  typeField,
  setTypeField,
  arr,
  setArr,
  dataIndex,
  isWin,
  reset,
  setReset,
}) => {
  // Первоначальный тип указанный во всех полях
  const [type, setType] = useState('');

  // Флаг на проверку что бы нельзя было нажать дважды на поле
  const [flag, setFlag] = useState(false);

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

  // Функция длля клика
  function isNoneClick() {
    // Если тру тогда нажимать нельзя
    if (flag || isWin()) {
      return;
    }
    setFlag(true);
    setType(typeField);
    // Закидываю на нужное место в массив тип элемента
    setArr(
      arr.map((item, index) => {
        if (index === dataIndex) {
          return typeField;
        }
        return item;
      }),
    );
    if (typeField === 'circle') {
      setTypeField('chest');
    } else {
      setTypeField('circle');
    }
  }

  return (
    <CellField
      type={type}
      setType={setType}
      dataIndex={dataIndex}
      isWin={isWin}
      isNoneClick={isNoneClick}
      isClassType={isClassType}
      reset={reset}
      setReset={setReset}
      isReset={isReset}
    />
  );
};
