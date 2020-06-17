import {
     OBTENER_PAISES,
     PAISES_ERROR,
     PAISES_EXITO
} from '../types';

const initialState = {
     listadoPaises: null,
     loading: false,
     error: false
}

export default function (state = initialState, action) {
     switch (action.type) {
          case OBTENER_PAISES:
               return {
                    ...state,
                    loading: true,
                    error: false
               }
               case PAISES_EXITO:
               return {
                    ...state,
                    loading: false,
                    listadoPaises: action.payload,
                    error: false,
               }
          case PAISES_ERROR:
               return {
                    ...state,
                    loading: false,
                    error: true
               }
          default:
               return state;
     }
}