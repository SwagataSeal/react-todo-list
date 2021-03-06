import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white p-2 m-2">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add to do list"
              value={item}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              disabled={item ? false : true}
              className={
                editItem
                  ? 'btn btn-success align-center btn-lg mt-3 text-uppercase'
                  : 'btn btn-primary align-center btn-lg mt-3 text-uppercase'
              }
            >
              {editItem ? 'Edit Item' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
