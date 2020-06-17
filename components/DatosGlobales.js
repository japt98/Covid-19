import React, { useEffect } from 'react';
import Spinner from './ui/Spinner';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerGlobal } from '../store/actions/globalAction';

//Material UI
import { makeStyles } from '@material-ui/core/styles';

const DatosGlobales = () => {

     const useStyles = makeStyles({
          container: {
               textAlign: 'right',
               marginTop: 30,
               color: '#09262e',
               fontSize: '150%',
          },
          numero: {
               marginTop: 5,
               marginBottom: 20,
          }
     });

     const classes = useStyles();

     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(obtenerGlobal());
     }, []);

     const datosGlobales = useSelector(state => state.global.datosGlobales);
     const loading = useSelector(state => state.global.loading);

     if (loading) {
          return <Spinner />;
     } else if (datosGlobales === null) {
          return null;
     };

     return (
          <div className={classes.container}>
               <div>
                    <h3>Nuevos Confirmados</h3>
                    <p className={classes.numero}>{datosGlobales.NewConfirmed}</p>
               </div>
               <div>
                    <h3>Total Confirmados</h3>
                    <p className={classes.numero}>{datosGlobales.TotalConfirmed}</p>
               </div>
               <div>
                    <h3>Nuevos Fallecidos</h3>
                    <p className={classes.numero}>{datosGlobales.NewDeaths}</p>
               </div>
               <div>
                    <h3>Total Fallecidos</h3>
                    <p className={classes.numero}>{datosGlobales.TotalDeaths}</p>
               </div>
               <div>
                    <h3>Nuevos Recuperados</h3>
                    <p className={classes.numero}>{datosGlobales.NewRecovered}</p>
               </div>
               <div>
                    <h3>Total Recuperados</h3>
                    <p className={classes.numero}>{datosGlobales.TotalRecovered}</p>
               </div>
          </div>
      );
}

export default DatosGlobales;