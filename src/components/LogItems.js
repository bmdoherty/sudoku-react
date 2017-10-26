import React, { Component } from 'react';

export default class LogItems extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.formatItems = this.formatItems.bind(this);
    }

    formatItems(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        const { items } = this.props
        var listItems = items.map(this.formatItems);
        
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};
