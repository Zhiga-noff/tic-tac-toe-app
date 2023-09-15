// Вывод очередности ввода в зависимости от типа
import style from '../App.module.css';

export const getTypeField = (typeField) => {
  if (typeField === 'circle') {
    return (
      <p key={'circle'} className={style.circle}>
        O
      </p>
    );
  }
  return (
    <p key={'chest'} className={style.chest}>
      X
    </p>
  );
};
