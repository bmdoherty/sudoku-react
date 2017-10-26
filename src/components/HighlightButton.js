import React from 'react';

export default class HighlightButton extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.props.action.bind(this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Hightlight step {this.props.step}
            </button>
        );
    }
}