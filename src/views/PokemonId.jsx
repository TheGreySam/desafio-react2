import { useParams } from "react-router-dom"

export default function PokemonId() {
    
    const { id } = useParams("");
    console.log(id) 
    return (
        <div className="mt-5">
            <h1>{ id }</h1>
        </div>
    )
}