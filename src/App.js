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
    const item = data[Math.floor(Math.random()*data.length)];
    this.setState({
      lista: data,
      item: item
    })
  });
}
  render() {
    return (
      <div className="App">
        <div className="card">
        <div className="App-header"><h1>{this.state.item.name}</h1></div>
          <div className="container">
            <div className="row"><h4><b>Polulation: {this.state.item.population}</b></h4></div>
            <div className="row"><h4><b>Climate: {this.state.item.climate}</b></h4></div>
            <div className="row"><h4><b>Terrain: {this.state.item.terrain}</b></h4></div>
          </div>
        </div>
        <div><button onClick={() => this.getPlanets() }>Proximo</button></div>
      </div>
    );
  }
}

export default App;
