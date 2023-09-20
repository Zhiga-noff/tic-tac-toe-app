import style from './App.module.css';
import { StructuralComponent } from './components/StructuralComponent';
import PropTypes from 'prop-types';
import { isWin, getTypeField } from './modules';
import { store } from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import { selectType, selectArray, selectReset } from './store/selectors';
import { REVERSE_FLAG, RESET_GAME } from './store/actions';

export const App = () => {
  // Установка типов круг или крест
  const typeField = useSelector(selectType);
  // Пустой массив для внесения типов элементов на поле
  const arrClickResult = useSelector(selectArray);
  // Флаг для сброса полей
  const reset = useSelector(selectReset);

  const dispatch = useDispatch();

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
            dispatch(REVERSE_FLAG);
            dispatch(RESET_GAME);
          }}
        >
          {reset ? 'Play' : 'Reset'}
        </div>
      </div>

      <div className={style.app}>
        <StructuralComponent />
      </div>
    </>
  );
};

App.propTypes = {
  typeField: PropTypes.string,
  setTypeField: PropTypes.func,
  arrClickResult: PropTypes.array,
  setArrClickResult: PropTypes.func,
  getTypeField: PropTypes.func,
  isWin: PropTypes.func,
};
