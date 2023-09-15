import style from '../CellField.module.css';
import PropTypes from 'prop-types';
import { store } from '../../store/store';

export const CellField = ({ type, dataIndex, isNoneClick, isClassType, isReset }) => {
  isReset();
  const { resetFlag } = store.getState();

  return (
    <div
      data-index={dataIndex}
      onClick={() => {
        // setReset(false);
        store.dispatch({ type: 'FALSE_FLAG' });
        isNoneClick();
      }}
      className={`${style.cell} ${resetFlag ? '' : isClassType()}`}
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
