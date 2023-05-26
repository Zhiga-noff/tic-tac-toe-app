import style from '../CellField.module.css';
import {useState} from "react";

export const CellField = ({ type, setType, typeField, setTypeField }) => {
    const [flag, setFlag] = useState(false)

  function isClassType() {
    if (type) {
      return `${style[type]}`;
    }
  }

  function isNoneClick() {
      if (flag) {
          return
      }
      setFlag(true)
      setType(typeField)
      if (typeField==='circle') {
          setTypeField('chest')
      } else {
          setTypeField('circle')
      }
  }

  return (
    <div onClick={isNoneClick
    } className={`${style.cell} ${isClassType()}`}>
      {type === 'chest' ? 'X' : type === 'circle' ? 'O' : ''}
    </div>
  );
};
