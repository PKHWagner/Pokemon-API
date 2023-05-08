import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [allPokemon, setAllPokemon] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        return response.json();
      }).then(response => {
        console.log(response);
        setAllPokemon(response.results);
      }).catch(err => {
        console.log(err);
      });

    console.log(allPokemon);
  }
  // const [pokemon, setPokemon] = useState([]);
  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon/?limit=40")
  //     .then(response => response.json())
  //     .then(response => setPokemon(response.results))
  // }, []);



  return (
    <div className="App">
      <form action="" onSubmit={submitHandler}>
        <button>Fetch All Pokemon</button>
      </form>

      <hr />

      <h1>Your List of Pokemon</h1>
      {/* <div>
        {
          pokemon.length > 0 && pokemon.map((pokemon, index) => {
            return (<div key={index}>{pokemon.name}</div>)
          })
        }
      </div> */}
      <div>
        {
          allPokemon.map((pokemon, i) => (
            <div key={i}>

              <p>{pokemon.name}</p>

            </div >
          ))
        }
      </div>

    </div>
  );
}

export default App;
