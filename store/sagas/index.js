import { all } from "redux-saga/effects";
import consulta from "./consulta";
import listado from './listado';
import global from "./global";
import subscribe from './subscribe';

export default function* rootSaga() {
     yield all([
          consulta(),
          listado(),
          global(),
          subscribe()
     ]);
}