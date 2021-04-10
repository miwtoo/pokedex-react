import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./component/Card";

function App() {
  const [pokemons, setPokemon] = useState({} as Pokemons);
  useEffect(() => {
    axios.get(" https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => {
      setPokemon(res.data as Pokemons);
    });
  }, []);

  return (
    <div>
      {pokemons?.results?.map((pokemon) => {
        return <Card pokemon={pokemon} key={pokemon.name}></Card>;
      })}
    </div>
  );
}

export interface Result {
  name: string;
  url: string;
}

export interface Pokemons {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

export default App;
