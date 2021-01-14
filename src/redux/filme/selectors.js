import { FILME_INICIAL } from '../../util/constantes';

export const getFilmes = state => {
    console.log("Passou pelo selector", state.filme.filmes);
    return state.filme.filmes;
}

export const getFilmeAtual = state => state.filme.filmeAtual || FILME_INICIAL;