import { SUSCRIBIR_CORREO } from '../types';

export const suscribirCorreo = formValues => ({
     type: SUSCRIBIR_CORREO,
     payload: formValues
});