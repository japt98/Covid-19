import {
     SUSCRIBIR_CORREO,
     SUSCRIPCION_EXITO,
     SUSCRIPCION_ERROR
} from '../types';

const initialState = {
     suscripcion: false,
     loading: false,
     error: false
}

export default function (state = initialState, action) {
     switch (action.type) {
          case SUSCRIBIR_CORREO:
               return {
                    ...state,
                    loading: true,
                    error: false,
                    suscripcion: false
               }
               case SUSCRIPCION_EXITO:
               return {
                    ...state,
                    loading: false,
                    suscripcion: true,
                    error: false,
               }
          case SUSCRIPCION_ERROR:
               return {
                    ...state,
                    loading: false,
                    error: true,
                     suscripcion: false,
               }
          default:
               return state;
     }
}