import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Input from './ui/Input';
import BotonPrimario from './ui/BotonPrimario';
import Spinner from './ui/Spinner';
import validarInfo from '../validation/validarInfo';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { suscribirCorreo } from '../store/actions/subscribeAction';

// Redux Form
import { Field, reduxForm } from 'redux-form';

//Material UI
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

let InfoForm = (props) => {

     const matchesPhone = useMediaQuery('(max-width:768px)');

     const router = useRouter();

     const useStyles = makeStyles((theme) => ({
          contenedor: {
               width: '100%',
               display: 'flex',
               justifyContent: 'center',
          },
          formulario: {
               width: 300,
               marginTop: 30
          },
          campo: {
               display: 'flex',
               flexDirection: 'column',
               fontSize: 25,
               marginBottom: 20,
          },
          error: {
               fontSize: 17,
               borderRadius: 5,
               color: '#f44336',
          },
          listo: {
               color: '#388e3c',
          }
     }));

     const classes = useStyles();

     const dispatch = useDispatch();

     const [mensajeerror, setMensajeError] = useState({
          nombre: null,
          email: null
     });

     const handleSubmit = formValues => {
          const errores = validarInfo(formValues);
          if (Object.keys(errores).length !== 0) {
               setMensajeError(errores);
               return;
          } else {
               console.log('success');
          }
          setMensajeError({
               nombre: null,
               email: null
          });
          dispatch(suscribirCorreo(formValues));
     };

     const datosSuscripcion = useSelector(state => state.subscribe);
     const {suscripcion, loading, error} = datosSuscripcion;

     useEffect(() => {
          if (suscripcion) {
               setTimeout(() => {
                    //router.push("/");
               }, 1500)
          }
     })


     return (
          <div className={classes.contenedor}>
               <form
                    onSubmit={props.handleSubmit(handleSubmit)}
                    className={classes.formulario}
                    noValidate
               >
                    {suscripcion && (
                         <div>
                              <h2 className={classes.listo}>Listo, Estás Suscrito</h2>
                         </div>
                    )}
                    <div className={classes.campo}>
                         <label htmlFor="nombre">Nombre</label>
                         <Field
                              name="nombre"
                              type="text"
                              id="nombre"
                              component={Input}
                         />
                         {mensajeerror.nombre && (
                              <h3 className={classes.error}>{mensajeerror.nombre}</h3>
                         )}
                    </div>
                    <div className={classes.campo}>
                         <label htmlFor="email">Correo</label>
                         <Field
                              name="email"
                              type="email"
                              id="email"
                              component={Input}
                         />
                         {mensajeerror.email && (
                              <h3 className={classes.error}>{mensajeerror.email}</h3>
                         )}
                    </div>
                    <div className={classes.campo}>
                         {loading ? (
                              <Spinner/>
                         ) : (
                              <BotonPrimario
                                   type="submit"
                              >Suscribirme</BotonPrimario>
                         )}
                    </div>
                    {error && (
                         <h3 className={classes.error}>Parece que hubo un error, inténtelo de nuevo</h3>
                    )}
               </form>

          </div>
     )
};

InfoForm = reduxForm({
     form: 'formInfo'
})(InfoForm);

export default InfoForm;
