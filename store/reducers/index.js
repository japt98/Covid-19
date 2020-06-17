import {combineReducers} from 'redux';
import consultaReducer from './consultaReducer';
import listadoReducer from './listadoReducer';
import globalReducer from './globalReducer';
import { reducer as formReducer } from 'redux-form';
import subscribeReducer from './subscribeReducer';

export default combineReducers({
     consulta: consultaReducer,
     paises: listadoReducer,
     form: formReducer,
     global: globalReducer,
     subscribe: subscribeReducer
})