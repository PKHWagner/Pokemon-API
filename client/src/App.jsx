import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  // const [allPokemon, setAllPokemon] = useState([]);

  // const submitHandler = (e) => {
  //   e.preventDefault()
  // fetch("https://pokeapi.co/api/v2/pokemon")
  //   .then(response => {
  //     return response.json();
  //   }).then(response => {
  //     console.log(response);
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // setAllPokemon([...allPokemon, Response]);
  // console.log(allPokemon);
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=40")
      .then(response => response.json())
      .then(response => setPokemon(response.results))
  }, []);



  return (
    <div className="App">
      <form action="">
        <button>Fetch All Pokemon</button>
      </form>

      <hr />

      <h1>Your List of Pokemon</h1>
      <div>
        {
          pokemon.length > 0 && pokemon.map((pokemon, index) => {
            return (<div key={index}>{pokemon.name}</div>)
          })
        }
      </div>
      {/* {
        allPokemon.map((pokemon, i) => (
          <div key={i}>
            <ul>
              <li>{pokemon.name}</li>
            </ul>
          </div >
        ))
      } */}
    </div>
  );
}

export default App;
