import React, { Component } from 'react';

import MyContext from './MyContext';

export default class Rose extends Component {
  render() {
    return (
      <MyContext.Consumer>
       {kun => <div>saul{kun}</div>}
      </MyContext.Consumer>
    )
  }
}
