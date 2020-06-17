import {
     OBTENER_GLOBAL,
     GLOBAL_EXITO,
     GLOBAL_ERROR
} from '../types';

const initialState = {
     datosGlobales: null,
     loading: false,
     error: false,
}

export default function (state = initialState, action) {
     switch (action.type) {
          case OBTENER_GLOBAL:
               return {
                    ...state,
                    loading: true,
                    error: false
               }
          case GLOBAL_EXITO:
               return {
                    ...state,
                    loading: false,
                    datosGlobales: action.payload,
                    error: false,
               }
          case GLOBAL_ERROR:
               return {
                    ...state,
                    loading: false,
                    error: true
               }
          default:
               return state;
     }
}