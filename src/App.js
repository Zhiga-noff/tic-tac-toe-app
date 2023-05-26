import { useState } from 'react';
import style from './App.module.css';
import { CellField } from './components/Stateless/CellField';
import { StructuralComponent } from './components/StructuralComponent';

export const App = () => {
  return (
    <>
        <div className={style.result}>
            <p>Ваш ход</p>
            <p className={style.chest}>X</p>
        </div>
      <div className={style.app}>
        <StructuralComponent />
      </div>
    </>
  );
};
