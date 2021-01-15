import { all } from 'redux-saga/effects';

import filmeSaga from './filme/sagas';

export default function* sagas() {
    yield all([
        filmeSaga()
    ])
}