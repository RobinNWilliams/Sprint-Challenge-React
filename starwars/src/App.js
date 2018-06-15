import React, { Component } from 'react';
import './App.css';
import CharList from './components/CharList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [

       { name:Chewbacca,
         species: Wookiee,
         id: rebel

       },

      { name: Yoda, 
        species: humanoid,
        id: rebel
      },

      { name:Obi-Wan, 
        species: human,
        id: rebel
      },

      {
        name:Jabba,
        species: hut,
        id: empire
      },

      {
        name: Palpatine,
        species: human,
        id: empire
      },

     {  
        name: Anakin,
        species: human,
        id: empire
     }

  ],
  StarWars: ""
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <ul>
      <CharList CharListArray={this.state.Characters} />
      </ul>
     
    );
  }
}

export default App;
