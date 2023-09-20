import style from './App.module.css';
import { StructuralComponentClass } from './components/StructuralComponent';
import { isWin, getTypeField } from './modules';
import { connect } from 'react-redux';
import { REVERSE_FLAG, RESET_GAME } from './store/actions';
import { Component } from 'react';

export class AppClassContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="flex justify-between items-stretch">
          <div
            className={`py-5 px-5 text-xl bg-white font-semibold rounded-3xl
            border border-black mb-5 mr-2 flex justify-between
            items-center flex-[1_1_70%]`}
          >
            {isWin(this.props.arrClickResult) ? (
              <p key={'endGame'}>Игра окончена</p>
            ) : (
              [<p key={'message'}>Ваш ход</p>, getTypeField(this.props.typeField)]
            )}
          </div>
          <div
            className={`py-5 text-xl bg-white font-semibold rounded-3xl
            border border-black mb-5 mr-2 flex justify-center
            items-center flex-[1_1_20%] cursor-pointer`}
            onClick={() => {
              this.props.dispatch(REVERSE_FLAG);
              this.props.dispatch(RESET_GAME);
            }}
          >
            {this.props.reset ? 'Play' : 'Reset'}
          </div>
        </div>

        <div
          className={`grid grid-cols-3 grid-rows-3 w-[560px] h-[560px] gap-5
        bg-white rounded-3xl border border-black p-5`}
        >
          <StructuralComponentClass />
        </div>
      </>
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

export const AppClass = connect(mapStateToProps)(AppClassContainer);
