//constants
const initialState={
    array:[],
    offset:-20
}
const GEt_POKEMONES="GEt_POKEMONES";

//reduces
export const pokemonesReducer=(state=initialState, action)=>{
    switch(action.type){
        case GEt_POKEMONES:
            console.log(action.payload);
            return {
                ...state,
                array:action.payload.data,
                offset:action.payload.offset
            }
        default:
            return state
    }
}



//actions

export const getPokemonesAction=()=>async(dispatch,getState)=>{
    let offset=getState().pokemones.offset+20
    console.log('getstate',offset)
    
    const data1=await fetch('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit=20')
    const data=await data1.json();
    dispatch({
        type:GEt_POKEMONES,
        payload:{data:data.results,offset:offset}
    })    
}

export const getSegientePokeAction=()=>()=>{

}