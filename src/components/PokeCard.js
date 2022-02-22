import React from 'react'
import { useSelector } from 'react-redux'

export const PokeCard = () => {  
    
    const pokeArray=useSelector(state=>state.pokemones.array)
    return (
        <div className='row my-3'>
            {
            pokeArray.map((item,i)=>                
                {return <div className="col-md-4 my-3">
                <div key={item.name} className="card">
                    <div className="card-header">
                        {item.name}
                    </div>
                    <div className="card-body">
                        <h1>{item.name}</h1>
                    </div>
                    <div className="card-footer">
                        {item.url}
                    </div>
                </div>
                </div>
                }        
            )
        }            
        </div>
    )
}

export default PokeCard;