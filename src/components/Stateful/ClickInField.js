import { Component } from 'react';
import style from '../CellField.module.css';
import { isWin } from '../../modules';
import { connect } from 'react-redux';
import { clickToFieldAction, newTypeAction } from '../../store/actions';
import { CellFieldClass } from '../Stateless/CellField';

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

  isReset=()=>  {
    if (this.props.reset) {
        console.log(this.props.reset);
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
      <CellFieldClass
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
