import React, { Component } from 'react';
import { v1 as uuid } from 'uuid';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updatedItem = [...this.state.items, newItem];

    this.setState({
      items: updatedItem,
      id: uuid(),
      item: '',
      editItem: false,
    });
  };
  handleClear = () => {
    this.setState({
      items: [],
    });
  };
  handleEdit = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    console.log(selectedItem);
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };
  handleDelete = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItem,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-5">
            <h3 className="text-capitalize text-center"> Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleEdit={this.state.handleEdit}
            />
            <TodoList
              items={this.state.items}
              handleClear={this.handleClear}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
