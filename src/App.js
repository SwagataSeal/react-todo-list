import React, { Component } from 'react';
import { v1 as uuid } from 'uuid';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class App extends Component {
  state = {
    item: [
      { id: 1, title: 'Wake Up' },
      { id: 2, title: 'Brush My teeth' },
    ],
    id: uuid(),
    item: '',
    editItem: false,
  };
  handleChange = (e) => {
    console.log('handle Change');
  };
  handleSubmit = (e) => {
    console.log('handle Submit');
  };
  handleClear = () => {
    console.log('handle Clar');
  };
  handleEdit = (id) => {
    console.log('handle Delete  $(id)');
  };
  handleDelete = (id) => {
    console.log('handle Delete  $(id)');
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-5">
            <h3 className="text-capitalize text-center"> ToDo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleEdit={this.state.handleEdit} />
            <TodoList items={this.state.items} handleClear={this.handleClear} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    );
  }
}
