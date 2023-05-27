import { useState } from 'react';
import style from './App.module.css';
import { StructuralComponent } from './components/StructuralComponent';
import { func } from 'prop-types';

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
    '',
  ]);

  function getTypeField() {
    if (typeField === 'circle') {
      return <p className={style.circle}>O</p>;
    }
    return <p className={style.chest}>X</p>;
  }

  console.log(arrClickResult);

  const resultForWin = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  function checkingForResults(type) {
     return resultForWin.some((item) => {
          let current = 0;
          return type.some((itemType) => {
              for (let i = 0; i < item.length; i++) {
                  if (itemType === item[i]) {
                      current += 1;
                      console.log(current);
                  }
                  if (current === 3) {
                      return true;
                  }
              }
          });
      });
  }
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

    return checkingForResults(circle) || checkingForResults(chest)
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
