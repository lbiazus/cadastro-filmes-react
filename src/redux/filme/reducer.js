//import { ARMAZENAR_FILMES } from './types';
import * as types from './types';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = {};

const FilmeReducer = handleActions(
    {
        [types.ARMAZENAR_FILMES]: (state,action) => ({...state, filmes: action.payload}),
        [types.SETAR_FILME_ATUAL]: (state,action) => ({ ...state, filmeAtual: action.payload})
    },
    INITIAL_STATE
)

/* const FilmeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ARMAZENAR_FILMES: {
            console.log("Passou pelo armazenar filmes:", action);
            return { ...state, filmes: action.payload }
        }
        case types.SETAR_FILME_ATUAL:             
            return { ...state, filmeAtual: action.payload }
        default: 
            return state;
    }
} */


export default FilmeReducer;