import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class todoList extends Component {
  render() {
    const { items, handleDelete, handleEdit, handleClear } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center"> Todo List</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            ></TodoItem>
          );
        })}
        <div className="d-grid gap-2">
          <button
            type="button"
            className='="btn btn-danger align-center btn-lg mt-3 text-uppercase'
            onClick={handleClear}
          >
            Clear List
          </button>
        </div>
      </ul>
    );
  }
}
