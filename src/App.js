import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lista: [],
      item: ''
    }
  }

componentWillMount(){
  this.getPlanets();
}
getPlanets(){
  const aleatorio = Math.floor(Math.random() * 7 + 1);
  axios.get('http://swapi.co/api/planets/?page='+aleatorio)
  .then(res => {
    let data = res.data.results;
    this.setState({lista: data})
    const item = data[Math.floor(Math.random()*data.length)]
    this.setState({item: item})
    console.log(this.state.item)
  });
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Planet:</h1>
          <h3>Name: {this.state.item.name}</h3>
        </div>
        <p>Polulation: {this.state.item.population} </p>
        <p>Climate: {this.state.item.climate} </p>
        <p>Terrain: {this.state.item.terrain} </p>
        <button onClick={() => this.getPlanets() }>Proximo</button>


      </div>
    );
  }
}

export default App;
