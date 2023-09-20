import {  ClickInFieldClass } from './Stateful/ClickInField';
import { connect } from 'react-redux';
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
