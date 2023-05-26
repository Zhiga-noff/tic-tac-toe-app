import style from '../CellField.module.css';
import {useState} from "react";

export const CellField = ({ type, setType, typeField, setTypeField }) => {

  function isClassType() {
    if (type) {
      return `${style[type]}`;
    }
  }

  return (
    <div onClick={() => {
        setType(typeField)
        if (typeField==='circle') {
            setTypeField('chest')
        } else {
            setTypeField('circle')
        }
    }
    } className={`${style.cell} ${isClassType()}`}>
      {type === 'chest' ? 'X' : type === 'circle' ? 'O' : ''}
    </div>
  );
};
