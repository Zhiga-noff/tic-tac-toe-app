import { useState } from 'react';
import style from './App.module.css';
import { CellField } from './components/Stateless/CellField';
import { StructuralComponent } from './components/StructuralComponent';

export const App = () => {
    const [typeField, setTypeField] = useState('circle')

    function getTypeField() {
        if (typeField==='circle') {
            return <p className={style.circle}>O</p>
        }
       return <p className={style.chest}>X</p>
    }

  return (
    <>
        <div className={style.result}>
            <p>Ваш ход</p>
            {getTypeField()}
        </div>
      <div className={style.app}>
        <StructuralComponent  typeField={typeField} setTypeField={setTypeField}/>
      </div>
    </>
  );
};
