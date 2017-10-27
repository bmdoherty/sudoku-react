import React from 'react';
import LogItems from './LogItems';

export default class Log extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { items } = this.props

    return (
      <div className="todoListMain">
        <LogItems items={items} key='logItems'/>
      </div>
    )
  }
}
