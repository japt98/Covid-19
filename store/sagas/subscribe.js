import { put, call, takeLatest } from 'redux-saga/effects';
import {subscribeApi} from '../../api/apiCall';
import {
     SUSCRIBIR_CORREO,
     SUSCRIPCION_EXITO,
     SUSCRIPCION_ERROR
} from '../types';

export function* suscribirCorreo({ payload }) {
     try {
          yield call(subscribeApi, 'POST', 'https://reqres.in/api/users', payload );
          yield put({
               type: SUSCRIPCION_EXITO,
          });
     } catch (error) {
          console.log(error);
          yield put({
               type: SUSCRIPCION_ERROR
          });
     }
};

export default function* subscribe() {
     yield takeLatest(SUSCRIBIR_CORREO, suscribirCorreo);
}
