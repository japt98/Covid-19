import { put, call, takeLatest } from 'redux-saga/effects';
import apiCall from '../../api/apiCall';
import {
     INICIAR_CONSULTA,
     CONSULTA_EXITO,
     CONSULTA_ERROR
} from '../types';

export function* obtenerDatosPais({ payload }) {
     try {
          const resultado = yield call(apiCall, 'get', payload );
          if (resultado.length !== 0) {
               yield put({
                    type: CONSULTA_EXITO,
                    payload: resultado[resultado.length-1]
               });
          } else {
               yield put({
                    type: CONSULTA_ERROR
               });
          }
     } catch (error) {
          console.error(error);
          yield put({
               type: CONSULTA_ERROR
          });
     }
};

export default function* consulta() {
     yield takeLatest(INICIAR_CONSULTA,obtenerDatosPais);
}