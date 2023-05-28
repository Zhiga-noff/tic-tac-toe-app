import { useState } from 'react';
import style from './App.module.css';
import { AppLayout } from './AppLayout';
import { func } from 'prop-types';

export const App = () => {
  // Установка типов круг или крест
  const [typeField, setTypeField] = useState('circle');
  // Пустой массив для внесения типов элементов на поле
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

  const [reset, setReset]= useState(false)

  // Вывод очередности ввода в зависимости от типа
  function getTypeField() {
    if (typeField === 'circle') {
      return <p key={'circle'} className={style.circle}>O</p>;
    }
    return <p key={'chest'} className={style.chest}>X</p>;
  }

  // Массив из побеждающих результатов
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

  // Отдельная функция для проверки на ряд одинаковых элементов
  function checkingForResults(type) {
    return resultForWin.some((item) => {
      let current = 0;
      return type.some((itemType) => {
        for (let i = 0; i < item.length; i++) {
          if (itemType === item[i]) {
            current += 1;
          }
          if (current === 3) {
            return true;
          }
        }
      });
    });
  }

  // Создание массивов с индаксами элементов и возвращает тру или фолс если завершена линия
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

    if (!arrClickResult.includes('')) {
        return true
    }

    return checkingForResults(circle) || checkingForResults(chest);
  }




  return (
    <AppLayout
      typeField={typeField}
      setTypeField={setTypeField}
      arrClickResult={arrClickResult}
      setArrClickResult={setArrClickResult}
      getTypeField={getTypeField}
      isWin={isWin}
      reset={reset}
      setReset={setReset}
    />
  );
};
