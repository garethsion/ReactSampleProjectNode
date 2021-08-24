import React, { Component } from 'react';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';
import Button from './Button';

class ButtonContainer extends Component {
    // handleClick = () => {
    //     this.props.getData();
    //     console.log(this.props.state)
    // };

    render() {
        return (
            <Button handleClick={this.props.fetchData}></Button>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(Button)