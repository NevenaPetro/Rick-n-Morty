import React, { Component } from 'react';
import './card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="littleCard"
        onClick={() => {
          this.props.method(this.props.niz);
        }}
      >
        <p className='name'>{this.props.niz.name}</p>
        <img src={this.props.niz.image} alt="" />
        <p>{this.props.niz.status}</p>
      </div>
    );
  }
}
