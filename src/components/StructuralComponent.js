import { ClickInField } from './Stateful/ClickInField';
import PropTypes from 'prop-types';
import { store } from '../store';

export const StructuralComponent = ({
  typeField,
  setTypeField,
  arr,
  setArr,
  reset,
  setReset,
}) => {
  return (
    <>
      {arr.map((item, index) => (
        <ClickInField
          key={index}
          typeField={typeField}
          setTypeField={setTypeField}
          arr={arr}
          setArr={setArr}
          dataIndex={index}
          reset={reset}
          setReset={setReset}
        />
      ))}
    </>
  );
};

StructuralComponent.propTypes = {
  typeField: PropTypes.string,
  setTypeField: PropTypes.func,
  arr: PropTypes.array,
  setArr: PropTypes.func,
  isWin: PropTypes.func,
  reset: PropTypes.bool,
  setReset: PropTypes.func,
};
