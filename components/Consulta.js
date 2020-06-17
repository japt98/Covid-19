import React from 'react';
import Spinner from './ui/Spinner';

//Redux
import { useSelector } from 'react-redux';

//Material UI
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Consulta = () => {

     const consulta = useSelector(state => state.consulta);
     const {loading, error, datosPais} = consulta;

     const matchesPhone = useMediaQuery('(max-width:768px)');

     const useStyles = makeStyles((theme) => ({
          container: {
               width: '80%',
               margin: '50px 0 50px auto',
               padding: '20px',
               backgroundColor: '#0f637d',
               color: '#fff',
               borderRadius: 5,
          },
          containerMovil: {
               width: '100%',
               padding: '20px',
               backgroundColor: '#0f637d',
               color: '#fff',
               borderRadius: 5,
          },
          error: {
               textAlign: 'center',
               width: '260px',
               margin: '20px auto',
               fontSize: 20,
               padding: 10,
               borderRadius: 5,
               color: 'rgb(97, 26, 21)',
               backgroundColor: 'rgb(253, 236, 234)',
          },
           titulo: {
                marginBottom: 20,
           }
     }));

     const classes = useStyles();

     if (loading) {
          return <Spinner/>;
     } else if (error) {
          return (
               <div className={classes.error}>Hubo un error al hacer la consulta, prueba otra vez o con otro país</div>
          );
     } else if (datosPais === null) return null;

     return (
          <div className={matchesPhone ? (classes.containerMovil) : (classes.container)}>
               <h2 className={classes.titulo}>Información actual en {datosPais.Country}</h2>
               <p>Casos Confirmados: <strong>{datosPais.Confirmed}</strong></p>
               <p>Casos Activos: <strong>{datosPais.Recovered}</strong></p>
               <p>Fallecimientos: <strong>{datosPais.Deaths}</strong></p>
               <h4>
                    <em>Estos datos se actualizan cada 10 minutos</em>
               </h4>
          </div>
      );
}

export default Consulta;