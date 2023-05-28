import { ClickInField } from './Stateful/ClickInField';
import PropTypes from 'prop-types';

export const StructuralComponent = ({
  typeField,
  setTypeField,
  arr,
  setArr,
  isWin,
  reset,
  setReset,
}) => {
  return (
    <>
      <ClickInField
        typeField={typeField}
        setTypeField={setTypeField}
        arr={arr}
        setArr={setArr}
        dataIndex={1}
        isWin={isWin}
        reset={reset}
        setReset={setReset}
      />
      <ClickInField
        typeField={typeField}
        setTypeField={setTypeField}
        arr={arr}
        setArr={setArr}
        dataIndex={2}
        isWin={isWin}
        reset={reset}
        setReset={setReset}
      />
      <ClickInField
        typeField={typeField}
        setTypeField={setTypeField}
        arr={arr}
        setArr={setArr}
        dataIndex={3}
        isWin={isWin}
        reset={reset}
        setReset={setReset}
      />
      <ClickInField
        typeField={typeField}
        setTypeField={setTypeField}
        arr={arr}
        setArr={setArr}
        dataIndex={4}
        isWin={isWin}
        reset={reset}
        setReset={setReset}
      />
      <ClickInField
        typeField={typeField}
        setTypeField={setTypeField}
        arr={arr}
        setArr={setArr}
        dataIndex={5}
        isWin={isWin}
        reset={reset}
        setReset={setReset}
      />
      <ClickInField
        typeField={typeField}
        setTypeField={setTypeField}
        arr={arr}
        setArr={setArr}
        dataIndex={6}
        isWin={isWin}
        reset={reset}
        setReset={setReset}
      />
      <ClickInField
        typeField={typeField}
        setTypeField={setTypeField}
        arr={arr}
        setArr={setArr}
        dataIndex={7}
        isWin={isWin}
        reset={reset}
        setReset={setReset}
      />
      <ClickInField
        typeField={typeField}
        setTypeField={setTypeField}
        arr={arr}
        setArr={setArr}
        dataIndex={8}
        isWin={isWin}
        reset={reset}
        setReset={setReset}
      />
      <ClickInField
        typeField={typeField}
        setTypeField={setTypeField}
        arr={arr}
        setArr={setArr}
        dataIndex={9}
        isWin={isWin}
        reset={reset}
        setReset={setReset}
      />
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
    setReset: PropTypes.func
}
