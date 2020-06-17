import { put, call, takeLatest } from 'redux-saga/effects';
import apiCall from '../../api/apiCall';
import {
     OBTENER_GLOBAL,
     GLOBAL_EXITO,
     GLOBAL_ERROR
} from '../types';

export function* obtenerGlobal({ payload }) {
     try {
          const resultado = yield call(apiCall, 'get', 'https://api.covid19api.com/summary' );
          yield put({
               type: GLOBAL_EXITO,
               payload: resultado.Global
          });
     } catch (error) {
          console.error(error);
          yield put({
               type: GLOBAL_ERROR
          });
     }
};

export default function* global() {
     yield takeLatest(OBTENER_GLOBAL, obtenerGlobal);
}