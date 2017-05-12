import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lista: []
    }
  }
  //http://swapi.co/api/planets
  componentDidMount(){
    axios.get('http://swapi.co/api/planets')
  .then(res => {
    let data = res.data.results;
    this.setState({lista: data})
    let item = data[Math.floor(Math.random()*data.length)]
    console.log(item)

  });
}
  render() {
    return (
      <div className="App">
      <h1>Planetas:</h1>
        {this.state.lista.map((planeta) => {
          return(
            <div key={planeta.created}>
              <div>
                <h1>{planeta.name}</h1>
              </div>
            </div>
          )
        })}



      </div>
    );
  }
}

export default App;
