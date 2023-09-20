import {  ClickInFieldClass } from './Stateful/ClickInField';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { selectArray } from '../store/selectors';
import { Component } from 'react';


export class StructuralComponentClassContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {this.props.arrClickResult.map((item, index) => (
                    <ClickInFieldClass key={index} dataIndex={index} />
                ))}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        arrClickResult: state.arrayState,
    };
};

export const StructuralComponentClass = connect(mapStateToProps)(StructuralComponentClassContainer)
