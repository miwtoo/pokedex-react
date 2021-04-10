import { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";

export default function Card(props: {
  pokemon: { name: string; url: string };
}) {
  const [pokemon, setPokemon] = useState({} as Pokemon);
  useEffect(() => {
    axios.get(props.pokemon.url).then((res) => {
      setPokemon(res.data);
    });
  }, [props.pokemon.url]);
  return (
    <div className="my-6 mx-4 shadow-xl bg-white bg-opacity-50 rounded-2xl">
      <div className="grid grid-cols-2">
        <div className="bg-gray-300 bg-opacity-90 rounded-2xl">
          <div className="p-6">
            <div>{oneCapital(props.pokemon.name)}</div>
            <div>
              {pokemon?.types?.map((v) => (
                <span className={"rounded p-1 mr-1 bg-white"}>
                  {v.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6">
          <img
            className="filter drop-shadow-lg"
            src={pokemon.sprites?.other?.dream_world?.front_default}
            alt={props.pokemon.name}
          />
        </div>
      </div>
    </div>
  );
}

function oneCapital(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

type Pokemon = {
  sprites: {
    other: {
      dream_world: {
        front_default: string;
        "official-artwork": string;
      };
    };
  };
  types: [
    {
      slot: number;
      type: {
        name: string;
      };
    }
  ];
};
