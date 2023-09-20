import { CellField } from '../Stateless/CellField';
import { Component, useState } from 'react';
import style from '../CellField.module.css';
import PropTypes from 'prop-types';
import { isWin } from '../../modules';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectArray, selectReset, selectType } from '../../store/selectors';
import { clickToFieldAction, newTypeAction } from '../../store/actions';
import { AppClassContainer } from '../../App';

export class ClickInFieldClassContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      flag: false,
    };
  }

  isClassType = () => {
    if (this.state.type) {
      return `${style[this.state.type]}`;
    }
  };

  isReset = () => {
    if (this.props.reset) {
      this.setState({
          flag:false,
          type: ''
      })
    }
  };

  isNoneClick = () => {
    if (this.state.flag || isWin(this.props.arrClickResult)) {
      return;
    }

    this.setState({
        flag: true,
        type: this.props.typeField
    })
    this.props.dispatch(clickToFieldAction(this.props.dataIndex, this.props.typeField));
    if (this.props.typeField === 'circle') {
      this.props.dispatch(newTypeAction('chest'));
    } else {
      this.props.dispatch(newTypeAction('circle'));
    }
  };

  render() {
    return (
      <CellField
        type={this.state.type}
        dataIndex={this.props.dataIndex}
        isNoneClick={this.isNoneClick}
        isClassType={this.isClassType}
        isReset={this.isReset}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reset: state.resetState,
    arrClickResult: state.arrayState,
    typeField: state.typeState,
  };
};

export const ClickInFieldClass = connect(mapStateToProps)(ClickInFieldClassContainer);
