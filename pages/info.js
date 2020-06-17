import React from 'react';
import Layout from '../components/layout/Layout'

//Material UI
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Redux-Form
import { reduxForm } from 'redux-form';
import InfoForm from '../components/InfoForm';

const Info = () => {

     const matchesPhone = useMediaQuery('(max-width:768px)');

     const useStyles = makeStyles((theme) => ({
          root: {
            width: '50%',
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
          },
          subtitulo: {
               textAlign: 'center',
               marginTop: 60,
               color: '#0f637d',
          }
        }));

        const classes = useStyles();

     return (
          <Layout>
               <div className={classes.root}>
                    <h1 className={matchesPhone ? (classes.tituloMovil) : (classes.titulo)}>Solicitar Información</h1>
                    <InfoForm/>
                    <h2 className={classes.subtitulo}>¡Cuidate!</h2>
               </div>
          </Layout>
      );
}

export default Info;
