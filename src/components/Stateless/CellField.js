import style from '../CellField.module.css';
import { FALSE_FLAG } from '../../store/actions';
import { connect } from 'react-redux';
import { Component } from 'react';

export class CellFieldClassContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div
                data-index={this.props.dataIndex}
                onClick={() => {
                    this.props.dispatch(FALSE_FLAG);
                    this.props.isNoneClick();
                }}
                className={`${style.cell} ${this.props.reset ? '' : this.props.isClassType()}`}
            >
                {this.props.type === 'chest' ? 'X' : this.props.type === 'circle' ? 'O' : ''}
            </div>
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

export const CellFieldClass = connect(mapStateToProps)(CellFieldClassContainer)
