import style from '../CellField.module.css';
import PropTypes from 'prop-types'

export const CellField = ({
  type,
  dataIndex,
  isNoneClick,
  isClassType,
  reset,
  setReset,
  isReset,
}) => {
    isReset()

  return (
    <div
      data-index={dataIndex}
      onClick={() => {
        setReset(false);
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
    reset: PropTypes.bool,
    setReset: PropTypes.func,
    isReset: PropTypes.func,
}
