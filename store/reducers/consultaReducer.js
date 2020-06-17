import {
     INICIAR_CONSULTA,
     CONSULTA_EXITO,
     CONSULTA_ERROR
} from '../types';

const initialState = {
     datosPais: null,
     loading: false,
     error: false,
}

export default function (state = initialState, action) {
     switch (action.type) {
          case INICIAR_CONSULTA:
               return {
                    ...state,
                    loading: true,
                    error: false
               }
          case CONSULTA_EXITO:
               return {
                    ...state,
                    loading: false,
                    datosPais: action.payload,
                    error: false,
               }
          case CONSULTA_ERROR:
               return {
                    ...state,
                    loading: false,
                    error: true
               }
          default:
               return state;
     }
}