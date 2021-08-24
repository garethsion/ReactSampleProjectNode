import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <div className="button">
                <button onClick = {()=>{this.props.handleClick()}}> Click Me</button>
            </div>
        )
    }
}
