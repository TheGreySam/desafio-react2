import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PokeContext from "./../context";

export default function Pokemones() {
    const [id, setId] = useState("");
    const { data } = useContext(PokeContext);
    const datos = data.results
    const pokedata = datos.map((obj) => (
        // <li className="dropdown-item" key={obj.id}>{obj.name}</li>
        <option value={obj.name}>{obj.name}</option>
    ));
    const navigate = useNavigate();
    const gotoPokemon = () => {
        navigate(`/PokemonId/${id}`);
    };
    return (
        <div className="mt-5" id="Pokemones">
            <h1>Selecciona un Pokemon</h1>
            
            <div className="input-group mb-3">
            <select className="form-select" aria-label="Default select example"
            value={id} onChange={({ target }) => setId(target.value)}>
                <option selected>Pokemones</option>
                { pokedata }
            </select>
            <button className="btn btn-outline-seconday" onClick={gotoPokemon}>Ver Pokemon</button>
            </div>
        </div>
    )
}