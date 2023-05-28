import style from './App.module.css';
import { StructuralComponent } from './components/StructuralComponent';
import PropTypes from 'prop-types';

export const AppLayout = ({
  typeField,
  setTypeField,
  arrClickResult,
  setArrClickResult,
  getTypeField,
  isWin,
  reset,
  setReset,
}) => {
  return (
    <>
      <div className={style.flexo}>
        <div className={style.result}>
          {isWin() ? (
            <p key={'endGame'}>Игра окончена</p>
          ) : (
            [<p key={'message'}>Ваш ход</p>, getTypeField()]
          )}
        </div>
        <div
          className={style.reset}
          onClick={() => {
            setReset(!reset);
            setArrClickResult(['', '', '', '', '', '', '', '', '', '']);
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
          isWin={isWin}
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
