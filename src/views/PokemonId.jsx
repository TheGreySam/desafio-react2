import { useParams } from "react-router-dom"
import React from "react";
import axios from "axios";

export default function PokemonId() {
    const [data, setData] = React.useState(null);
    const { id } = useParams("");
    //console.log(id)
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
        });
    }, []);

    if (!data) return null;
    console.log(data);
    const pokename = data.name;
    const pokehp = data.stats[0].base_stat;
    const pokeattack = data.stats[1].base_stat;
    const pokedefense = data.stats[2].base_stat;
    const pokespecial_attack = data.stats[3].base_stat;
    const pokespecial_defense = data.stats[4].base_stat;
    const pokespeed = data.stats[5].base_stat;
    const pokeimage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
    console.log(pokeimage)

    return (
        <div className="mt-5">
            <h1>{id}</h1>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pokeimage} className="img-fluid rounded-start" alt={pokename} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{pokename}</h5>
                            <p className="card-text">hp: {pokehp}</p>
                            <p className="card-text">attack: {pokeattack}</p>
                            <p className="card-text">defense: {pokedefense}</p>
                            <p className="card-text">special attack: {pokespecial_attack}</p>
                            <p className="card-text">special defense: {pokespecial_defense}</p>
                            <p className="card-text">speed: {pokespeed}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}