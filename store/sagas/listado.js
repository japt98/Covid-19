import { put, call, takeLatest } from 'redux-saga/effects';
import apiCall from '../../api/apiCall';
import {
     OBTENER_PAISES,
     PAISES_ERROR,
     PAISES_EXITO
} from '../types';

function* obtenerPaises({ payload }) {
     try {
          const resultado = yield call(apiCall, 'get', 'https://api.covid19api.com/countries' );
          yield put({
               type: PAISES_EXITO,
               payload: resultado
          });
     } catch (error) {
          console.error(error);
          yield put({
               type: PAISES_ERROR
          });
     }
};

export default function* listado() {
     yield takeLatest(OBTENER_PAISES, obtenerPaises);
}