import style from '../CellField.module.css';
import PropTypes from 'prop-types';
import { store } from '../../store/store';
import { FALSE_FLAG } from '../../store/actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectReset } from '../../store/selectors';
import { Component } from 'react';

export const CellField = ({ type, dataIndex, isNoneClick, isClassType, isReset }) => {
  isReset();
  const reset = useSelector(selectReset);
  const dispatch = useDispatch();

  return (
    <div
      data-index={dataIndex}
      onClick={() => {
        dispatch(FALSE_FLAG);
        isNoneClick();
      }}
      className={`${style.cell} ${reset ? '' : isClassType()}`}
    >
      {type === 'chest' ? 'X' : type === 'circle' ? 'O' : ''}
    </div>
  );
};

export class CellFieldClassContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>

            </div>
        );
    }

}

const CellFieldClass = connect()()
