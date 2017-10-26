import React from 'react';

export default class ApplyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {step: props.step};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.props.action.bind(this);
    }

 
    render() {
        return (
            <button onClick={this.handleClick}>
                apply next step
            </button>
        );
    }
}