import { createAction } from 'redux-actions';
import * as types from './types';
import FilmeAPI from '../../services/filmes';
import { FILME_INICIAL } from '../../util/constantes';
/* 
export const armazenarFilmes = filmes => {
    console.log("Passou pela action: ", filmes);
    return (
    {
        type: types.ARMAZENAR_FILMES,
        payload: filmes
    }
)} */

export const buscarFilmes = createAction(types.BUSCAR_FILMES);
export const buscarFilme = createAction(types.BUSCAR_FILME_POR_ID);
export const excluirFilme = createAction(types.EXCLUIR_FILME, filme => filme.id);
export const inserirFilme = createAction(types.INSERIR_FILME);

/* {
    type: types.BUSCAR_FILME_POR_ID,
    payload: id
}
 */
/* export const buscarFilmes = () => (
    { type: types.BUSCAR_FILMES }
)

export const buscarFilme = id => (
    {
        type: types.BUSCAR_FILME_POR_ID,
        id: id
    })

export const excluirFilme = filme => (
    {
        type: types.EXCLUIR_FILME,
        payload: filme
    }
)

export const inserirFilme = filme => (
    {
        type: types.INSERIR_FILME,
        payload: filme
    }
) */

/* export const buscarFilmes = () => {
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
    }*/

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