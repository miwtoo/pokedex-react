import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./component/Card";

function App() {
  const [pokemons, setPokemon] = useState({} as Pokemons);
  useEffect(() => {
    axios.get(" https://pokeapi.co/api/v2/pokemon?limit=10").then((res) => {
      setPokemon(res.data as Pokemons);
    });
  }, []);

  return (
    <div>
      {pokemons?.results?.map((pokemon) => {
        return (
          <a href={pokemon.url} className="my-6">
            <Card text={pokemon.name}></Card>
          </a>
        );
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
