import style from './App.module.css';
import { StructuralComponent } from './components/StructuralComponent';
import PropTypes from 'prop-types';
import { isWin } from './modules/is-win-function';
import { getTypeField } from './modules/get-type-field';
import { useState } from 'react';
import { ticTacToeArray } from './constants/tic-tac-toe-array';
import { store } from './store';

export const AppLayout = () => {
  // Установка типов круг или крест
  const [typeField, setTypeField] = useState('circle');

  // Пустой массив для внесения типов элементов на поле
  const [arrClickResult, setArrClickResult] = useState(ticTacToeArray);

  // Флаг для сброса полей
  const [reset, setReset] = useState(false);

  return (
    <>
      <div className={style.flexo}>
        <div className={style.result}>
          {isWin(arrClickResult) ? (
            <p key={'endGame'}>Игра окончена</p>
          ) : (
            [<p key={'message'}>Ваш ход</p>, getTypeField(typeField)]
          )}
        </div>
        <div
          className={style.reset}
          onClick={() => {
            store.dispatch({ type: 'RESET_GAME', payload: false });
            setReset(store.getState());

            store.dispatch({ type: 'RESET_ARRAY', payload: ticTacToeArray });
            setArrClickResult(['', '', '', '', '', '', '', '', '']);
          }}
        >
          {reset ? 'Play' : 'Reset'}
        </div>
      </div>

      <div className={style.app}>
        <StructuralComponent
          typeField={typeField}
          setTypeField={setTypeField}
          arr={arrClickResult}
          setArr={setArrClickResult}
          reset={reset}
          setReset={setReset}
        />
      </div>
    </>
  );
};

AppLayout.propTypes = {
  typeField: PropTypes.string,
  setTypeField: PropTypes.func,
  arrClickResult: PropTypes.array,
  setArrClickResult: PropTypes.func,
  getTypeField: PropTypes.func,
  isWin: PropTypes.func,
  reset: PropTypes.bool,
  setReset: PropTypes.func,
};
