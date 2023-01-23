import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import CharPage from './pages/CharPage/CharPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.goToCard = this.goToCard.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToPreviousPage = this.goToPreviousPage.bind(this);
    this.setPage = this.setPage.bind(this);
    this.state = {
      data: [],
      cardClicked: 0,
      character: {},
      page: 1,
    };
  }
  getData() {
    /* Imali smo prvo obicnu funkciju getData sa kojom smo fetchovali i za koju smo 
morali da proverimo da li se učitala (if (this.state.data.length) return; - to 
se inače zove GUARD STATEMENT). Onda nam je Stefan zamenio celu tu funkciju sa 
ComponentDidMount() koja služi baš za to*/

    fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.page}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  }
  goToCard(currentCharacter) {
    this.setState({
      cardClicked: !this.state.cardClicked,
      character: currentCharacter,
    });
  }
  goBack() {
    this.setState({
      cardClicked: !this.state.cardClicked,
    });
  }
  goToNextPage() {
    if (this.state.page < 42) {
    this.setState({ page: parseInt(this.state.page) + 1 });
  }
  }
  goToPreviousPage() {
    if (this.state.page > 1) {
      this.setState({ page: parseInt(this.state.page) - 1 });
    }
  }
  setPage(p) {
    this.setState({page: p});
  }
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevProps,prevState) {
if (prevState.page !== this.state.page) {
  this.getData()
}
  }
  render() {
    return (
      <div>
        {!this.state.cardClicked ? (
          <HomePage
            niz={this.state.data}
            method={this.goToCard}
            goToNextPage={this.goToNextPage}
            goToPreviousPage={this.goToPreviousPage}
            page = {this.state.page}
            setPage = {this.setPage}
          />
        ) : (
          <CharPage character={this.state.character} pageState={this.goBack} />
        )}
      </div>
    );
  }
}
