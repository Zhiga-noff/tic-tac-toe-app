import style from '../CellField.module.css';
import { useState } from 'react';

export const CellField = ({ type, dataIndex, isNoneClick, isClassType }) => {
  return (
    <div
      data-index={dataIndex}
      onClick={isNoneClick}
      className={`${style.cell} field ${isClassType()}`}
    >
      {type === 'chest' ? 'X' : type === 'circle' ? 'O' : ''}
    </div>
  );
};
