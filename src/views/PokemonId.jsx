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
    const pokehp = data.order;
    const pokeattack = data.name;
    const pokedefense = data.name;
    const pokespecial_attack = data.name;
    const pokespecial_defense = data.name;
    const pokespeed = data.name;
    const pokeimage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.order}.png`

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
                            <p className="card-text">{pokehp}</p>
                            <p className="card-text">{pokeattack}</p>
                            <p className="card-text">{pokedefense}</p>
                            <p className="card-text">{pokespecial_attack}</p>
                            <p className="card-text">{pokespecial_defense}</p>
                            <p className="card-text">{pokespeed}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}