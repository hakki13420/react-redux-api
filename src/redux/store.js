import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { pokemonesReducer } from "./pokemonReducer";
import thunk  from 'redux-thunk'

const allReducers=combineReducers({
    pokemones:pokemonesReducer
})
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
export const store=createStore(allReducers,composeEnhancers(applyMiddleware(thunk)));
