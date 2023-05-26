import style from '../CellField.module.css';
import {useState} from "react";

export const CellField = ({ type, setType, typeField, setTypeField, arr, setArr, dataIndex }) => {
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
      setArr(arr.map((item, index)=>{
          if (index === dataIndex) {
              return typeField
          }
          return item
      }))
      if (typeField==='circle') {
          setTypeField('chest')
      } else {
          setTypeField('circle')
      }
  }

  return (
    <div data-index={dataIndex} onClick={isNoneClick
    } className={`${style.cell} field ${isClassType()}`}>
      {type === 'chest' ? 'X' : type === 'circle' ? 'O' : ''}
    </div>
  );
};
