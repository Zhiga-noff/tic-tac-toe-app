import style from './App.module.css';
import { StructuralComponent } from './components/StructuralComponent';

export const AppLayout = ({
  typeField,
  setTypeField,
  arrClickResult,
  setArrClickResult,
  getTypeField,
  isWin,
}) => {
  return (
    <>
      <div className={style.flexo}>
        <div className={style.result}>
          {isWin() ? <p>Игра окончена</p> : [<p>Ваш ход</p>, getTypeField()]}
        </div>
          <div className={style.reset}>Reset</div>
      </div>

      <div className={style.app}>
        <StructuralComponent
          typeField={typeField}
          setTypeField={setTypeField}
          arr={arrClickResult}
          setArr={setArrClickResult}
          isWin={isWin}
        />
      </div>
    </>
  );
};
