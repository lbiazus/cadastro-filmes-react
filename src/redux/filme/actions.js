import * as types from './types';
import FilmeAPI from '../../services/filmes';
import { FILME_INICIAL } from '../../util/constantes';

export const armazenarFilmes = filmes => {
    console.log("Passou pela action: ", filmes);
    return (
    {
        type: types.ARMAZENAR_FILMES,
        payload: filmes
    }
)}

export const buscarFilmes = () => {
    console.log("Passou antes do dispatch");
    return async dispatch => {
        const filmes = await FilmeAPI.buscarFilmes();
        console.log("Passou pela action buscarFilmes: ", filmes);
        dispatch({ type: types.BUSCAR_FILMES, payload: filmes })
    }
}

export const buscarFilme = (id) => 
    async dispatch => {
        const filme = await FilmeAPI.buscarFilme(id);
        dispatch({ type: types.SETAR_FILME_ATUAL, payload: filme })
    }

export const excluirFilme = filme => 
    async dispatch => {
        console.log("Excluir Filme: ", filme.id);
        await FilmeAPI.excluirFilme(filme.id);
        dispatch(buscarFilmes())
    }

export const inserirFilme = (filme, service = FilmeAPI) => 
    async dispatch => {
        await service.inserirFilme(filme);
        dispatch(buscarFilmes());
    }

export const atualizarFilme = (filme, service = FilmeAPI) => 
    async () => {
        await service.atualizarFilme(filme);
    }

export const limparFilmeAtual = () => (
    {
        type: types.SETAR_FILME_ATUAL,
        payload: FILME_INICIAL
    }
)