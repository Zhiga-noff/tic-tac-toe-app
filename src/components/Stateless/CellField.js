import style from '../CellField.module.css';
import { useState } from 'react';

export const CellField = ({ type, setType, dataIndex, isNoneClick, isClassType,reset, setReset }) => {

  return (
    <div
      data-index={dataIndex}
      onClick={()=>{
          setReset(false)
          isNoneClick()
          }}
      className={`${style.cell} ${reset ? '' : isClassType()}`}
    >
      {type=== ''?'' : type === 'chest' ? 'X' : type === 'circle' ? 'O' : ''}
    </div>
  );
};
