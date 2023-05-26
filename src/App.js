import { useState } from 'react';
import style from './App.module.css';
import { StructuralComponent } from './components/StructuralComponent';

const nodeCollectionField = document.getElementsByClassName('field');
console.log(nodeCollectionField);

export const App = () => {
  const [typeField, setTypeField] = useState('circle');
  const [arrClickResult, setArrClickResult] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  function getTypeField() {
    if (typeField === 'circle') {
      return <p className={style.circle}>O</p>;
    }
    return <p className={style.chest}>X</p>;
  }

  console.log(arrClickResult);

  function isWin() {
    const circle = [];
    const chest = [];

    arrClickResult.forEach((item, index) => {
      if (item === 'circle') {
        circle.push(index);
      }
      if (item === 'chest') {
        chest.push(index);
      }
    });
  }

  console.log(isWin());

  return (
    <>
      <div className={style.result}>
        <p>Ваш ход</p>
        {getTypeField()}
      </div>
      <div className={style.app}>
        <StructuralComponent
          typeField={typeField}
          setTypeField={setTypeField}
          arr={arrClickResult}
          setArr={setArrClickResult}
        />
      </div>
    </>
  );
};
