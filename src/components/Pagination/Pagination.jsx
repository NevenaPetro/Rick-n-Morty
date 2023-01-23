import React, { Component } from 'react';
import './pagination.css';

export default class Pagination extends Component {
  render() {
    return (
      <div className="pagination">
        <button className="page" onClick={this.props.goToPreviousPage}>
          Previous
        </button>
        <button
          className="page1"
          onClick={(event) => {
            this.props.setPage(event.target.textContent);
          }}
        >
          {this.props.page <= 3
            ? 1
            : this.props.page >= 40
            ? 38
            : parseInt(this.props.page) - 2}
        </button>
        <button className="page1"
        onClick={(event) => {
            this.props.setPage(event.target.textContent);
          }}>
          {this.props.page <= 3
            ? 2
            : this.props.page >= 40
            ? 39
            : parseInt(this.props.page) - 1}
        </button>
        <button className="page1"
        onClick={(event) => {
            this.props.setPage(event.target.textContent);
          }}>
          {this.props.page <= 3
            ? 3
            : this.props.page >= 40
            ? 40
            : parseInt(this.props.page)}
        </button>
        <button className="page1"
        onClick={(event) => {
            this.props.setPage(event.target.textContent);
          }}>
          {this.props.page <= 3
            ? 4
            : this.props.page >= 40
            ? 41
            : parseInt(this.props.page) + 1}
        </button>
        <button className="page1"
        onClick={(event) => {
            this.props.setPage(event.target.textContent);
          }}>
          {this.props.page <= 3
            ? 5
            : this.props.page >= 40
            ? 42
            : parseInt(this.props.page) + 2}
        </button>
        <button className="page" onClick={this.props.goToNextPage}>
          Next
        </button>
      </div>
    );
  }
}
