import React, { Component } from 'react';
import Item from './TodoItem';

export default class todoList extends Component {
  render() {
    return (
      <div>
        <h2>todoList</h2>
        <Item />
      </div>
    );
  }
}
