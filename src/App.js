import style from './App.module.css';
import { StructuralComponent } from './components/StructuralComponent';
import { isWin, getTypeField } from './modules';
import { store } from './store/store';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectType, selectArray, selectReset } from './store/selectors';
import { REVERSE_FLAG, RESET_GAME } from './store/actions';
import { Component } from 'react';

export const App = () => {
  // Установка типов круг или крест
  const typeField = useSelector(selectType);
  // Пустой массив для внесения типов элементов на поле
  const arrClickResult = useSelector(selectArray);
  // Флаг для сброса полей
  const reset = useSelector(selectReset);

  const dispatch = useDispatch();

  return (
    <>
      <div className={style.flexo}>
        <div className={style.result}>
          {isWin(arrClickResult) ? (
            <p key={'endGame'}>Игра окончена</p>
          ) : (
            [<p key={'message'}>Ваш ход</p>, getTypeField(typeField)]
          )}
        </div>
        <div
          className={style.reset}
          onClick={() => {
            dispatch(REVERSE_FLAG);
            dispatch(RESET_GAME);
          }}
        >
          {reset ? 'Play' : 'Reset'}
        </div>
      </div>

      <div className={style.app}>
        <StructuralComponent />
      </div>
    </>
  );
};

export class AppClassContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <div className={style.flexo}>
                    <div className={style.result}>
                        {isWin(this.props.arrClickResult) ? (
                            <p key={'endGame'}>Игра окончена</p>
                        ) : (
                            [<p key={'message'}>Ваш ход</p>, getTypeField(this.props.typeField)]
                        )}
                    </div>
                    <div
                        className={style.reset}
                        onClick={() => {
                            this.props.dispatch(REVERSE_FLAG);
                            this.props.dispatch(RESET_GAME);
                        }}
                    >
                        {this.props.reset ? 'Play' : 'Reset'}
                    </div>
                </div>

                <div className={style.app}>
                    <StructuralComponent />
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reset: state.resetState,
        arrClickResult: state.arrayState,
        typeField: state.typeState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAgeIncrease: () => dispatch(),
        onAgeReset: () => dispatch(),
    };
};

export const AppClass=connect(mapStateToProps)(AppClassContainer)

