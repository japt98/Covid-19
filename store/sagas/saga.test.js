import { put, call } from 'redux-saga/effects';
import {
     GLOBAL_EXITO,
     GLOBAL_ERROR
} from '../types';
import {obtenerGlobal} from './global';
import globalMock from './mocks/globalMock';

describe('obtenerGlobal', () => {
     it('exito', () => {
          const generator = obtenerGlobal();
          const resultado = {
               Global: globalMock
          };

          expect(generator.next().value)
               .toEqual(call(apiCall, 'get', 'https://api.covid19api.com/summary'));

          expect(generator.next(resultado).value)
               .toEqual(put({
                    type: GLOBAL_EXITO,
                    payload: globalMock
               }));

          expect(generator.next())
               .toEqual({
                    done: true,
                    value: undefined
               })
     });

     it('error', () => {
          const generator = obtenerGlobal();
          const response = {};

          expect(generator.next().value)
               .toEqual(call(apiCall, 'get', 'https://api.covid19api.com/summary'));

          expect(generator.next(response).value)
               .toEqual(put({
                    type: GLOBAL_ERROR,
               }));

          expect(generator.next())
               .toEqual({ done: true, value: undefined });
        });
})