import { ClickInField } from './Stateful/ClickInField';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectArray } from '../store/selectors';

export const StructuralComponent = () => {
  const arrClickResult = useSelector(selectArray);

  return (
    <>
      {arrClickResult.map((item, index) => (
        <ClickInField key={index} dataIndex={index} />
      ))}
    </>
  );
};

StructuralComponent.propTypes = {
  typeField: PropTypes.string,
  setTypeField: PropTypes.func,
  isWin: PropTypes.func,
};
