//import { ARMAZENAR_FILMES } from './types';
import * as types from './types';

const INITIAL_STATE = {};

const FilmeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ARMAZENAR_FILMES: {
            console.log("Passou pelo armazenar filmes:", action);
            return { ...state, filmes: action.payload }
        }
        case types.BUSCAR_FILMES: {
            console.log("Passou pelo buscar filmes:", action);
            return { ...state, filmes: action.payload }
        }
        case types.SETAR_FILME_ATUAL:
            return { ...state, filmeAtual: action.payload }
        default: 
            return state;
    }
}

//const FilmeReducer 

export default FilmeReducer;