import { ClickInField } from './Stateful/ClickInField';
import PropTypes from 'prop-types';
import { store } from '../store/store';
import { useState } from 'react';

export const StructuralComponent = () => {
  const arrClickResult = store.getState().array;

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
