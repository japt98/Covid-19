import React from 'react'
import DatosGlobales from '../components/DatosGlobales';
import Layout from '../components/layout/Layout'

//Material UI
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Global = () => {

     const matchesPhone = useMediaQuery('(max-width:768px)');

     const useStyles = makeStyles((theme) => ({
          root: {
            width: '70%',
            margin: '0 auto',
          },
          titulo: {
               color: '#0f637d',
               fontSize: 50,
               textAlign: 'center',
               paddingTop: 30,
               paddingLeft: 100,
          },
          tituloMovil: {
               color: '#0f637d',
               fontSize: 30,
               textAlign: 'center',
               paddingTop: 30,
          }
        }));

        const classes = useStyles();

     return (
          <Layout>
               <div className={classes.root}>
                    <h1 className={matchesPhone ? (classes.tituloMovil) : (classes.titulo)}>Datos Globales</h1>
                    <DatosGlobales />
               </div>
          </Layout>
      );
}

export default Global;
