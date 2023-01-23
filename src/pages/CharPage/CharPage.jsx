import React, { Component } from 'react';
import './charpage.css';
import Header from '../../components/Header/Header';

export default class CharPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        {/* Kad koristimo onClick imamo dve varijante. Prva je sa arrow funcijom,
        ali onda moramo i da pozovemo tu metodu, a druga je da stavimo samo ime metode*/}
        <button className="goBack" onClick={this.props.pageState}>
          &#60;
        </button>
        <div className="character">
          <div>
            <img src={this.props.character.image} alt="" />
          </div>
          <div className="info">
            <p>Status:{this.props.character.status}</p>
            <p>Name: {this.props.character.name}</p>
            <p>Spacies: {this.props.character.species}</p>
            <p>Gender: {this.props.character.gender}</p>
          </div>
        </div>
      </div>
    );
  }
}
