import React, { Component } from 'react';
import './homepage.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Pagination
          goToNextPage={this.props.goToNextPage}
          goToPreviousPage={this.props.goToPreviousPage}
          page={this.props.page}
          setPage={this.props.setPage}
        />
        <div className="card">
          {this.props.niz.map(
            (el, i) =>
              (el = (
                <Card
                  niz={this.props.niz[i]}
                  key={i}
                  method={this.props.method}
                 
                />
              ))
          )}
        </div>
      </div>
    );
  }
}
