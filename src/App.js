import style from './App.module.css';
import {  StructuralComponentClass } from './components/StructuralComponent';
import { isWin, getTypeField } from './modules';
import { store } from './store/store';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectType, selectArray, selectReset } from './store/selectors';
import { REVERSE_FLAG, RESET_GAME } from './store/actions';
import { Component } from 'react';


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

