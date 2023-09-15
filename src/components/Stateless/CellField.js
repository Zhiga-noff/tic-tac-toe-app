import style from '../CellField.module.css';
import PropTypes from 'prop-types';
import { store } from '../../store/store';

export const CellField = ({ type, dataIndex, isNoneClick, isClassType, isReset }) => {
  isReset();
  const { reset } = store.getState().resetFlag;

  return (
    <div
      data-index={dataIndex}
      onClick={() => {
        store.dispatch({ type: 'FALSE_FLAG' });
        isNoneClick();
      }}
      className={`${style.cell} ${reset ? '' : isClassType()}`}
    >
      {type === 'chest' ? 'X' : type === 'circle' ? 'O' : ''}
    </div>
  );
};

CellField.propTypes = {
  type: PropTypes.string,
  dataIndex: PropTypes.number,
  isNoneClick: PropTypes.func,
  isClassType: PropTypes.func,
  isReset: PropTypes.func,
};
