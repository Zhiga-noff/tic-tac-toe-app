import style from './App.module.css';
import { StructuralComponent } from './components/StructuralComponent';
import PropTypes from 'prop-types';
import { isWin } from './modules/is-win-function';
import { getTypeField } from './modules/get-type-field';
import { useEffect, useState } from 'react';
import { ticTacToeArray } from './constants/tic-tac-toe-array';
import { store } from './store/store';

export const AppLayout = () => {
  // Установка типов круг или крест
  const [typeField, setTypeField] = useState('circle');

  // Пустой массив для внесения типов элементов на поле
  const [arrClickResult, setArrClickResult] = useState(ticTacToeArray);
  // Флаг для сброса полей

  const [reset, setReset] = useState(store.getState().resetFlag);
  const { resetFlag } = reset;

  useEffect(() => {
    const subscribe = store.subscribe(() => {
      setReset(store.getState());
    });

    return () => subscribe;
  }, []);

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
            store.dispatch({ type: 'REVERSE_FLAG' });
            setArrClickResult(ticTacToeArray);
          }}
        >
          {resetFlag ? 'Play' : 'Reset'}
        </div>
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

AppLayout.propTypes = {
  typeField: PropTypes.string,
  setTypeField: PropTypes.func,
  arrClickResult: PropTypes.array,
  setArrClickResult: PropTypes.func,
  getTypeField: PropTypes.func,
  isWin: PropTypes.func,
};
