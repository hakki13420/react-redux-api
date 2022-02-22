import { useDispatch } from "react-redux";
import { getPokemonesAction } from "../redux/pokemonReducer";
import PokeCard from './PokeCard'
import "./pokemones.css"

const Pokemones=()=>{
    const dispatch=useDispatch();
    
    
    return(
        <div className="container">
            <div className="navbar">
                <button
                    onClick={()=>dispatch(getPokemonesAction())}
                >
                    get pokemones
                </button>
            </div>
            <PokeCard />                      
        </div>
    )
}

export default Pokemones;