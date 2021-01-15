import { all, takeEvery, call, put } from "redux-saga/effects";
import * as types from './types';
import FilmeAPI from '../../services/filmes';

function* buscarFilmes() {
    const filmes = yield call(FilmeAPI.buscarFilmes);
    yield put({ type: types.ARMAZENAR_FILMES, payload: filmes })
}

function* buscarFilmePorId(action) {
    const filme = yield call(FilmeAPI.buscarFilme, action.payload);
    yield put({type: types.SETAR_FILME_ATUAL, payload: filme});
}

function* excluirFilme(action) {
    yield call(FilmeAPI.excluirFilme, action.payload);
    yield put({type: types.BUSCAR_FILMES});
}

function* inserirFilme(action) {
    yield call(FilmeAPI.inserirFilme, action.payload);
}

function* watcherBuscarFilmes() {
    yield takeEvery(types.BUSCAR_FILMES, buscarFilmes);
}

function* watcherBuscarFilmePorId() {
    yield takeEvery(types.BUSCAR_FILME_POR_ID, buscarFilmePorId)
}

function* watcherExcluirFilme() {
    yield takeEvery(types.EXCLUIR_FILME, excluirFilme);
}

export default function* sagas() {
    yield all([
        watcherBuscarFilmes(),
        takeEvery(types.BUSCAR_FILME_POR_ID, buscarFilmePorId),
        watcherExcluirFilme(),
        takeEvery(types.INSERIR_FILME, inserirFilme)
    ])
}