import { INICIAR_CONSULTA } from '../types';

export const iniciarConsulta = url => ({
     type: INICIAR_CONSULTA,
     payload: url
});

