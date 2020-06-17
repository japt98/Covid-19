import React from 'react';
import Layout from '../components/layout/Layout'

//Material UI
import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import BusinessIcon from '@material-ui/icons/Business';

const Contacto = () => {

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
               paddingLeft: 300,
          },
          tituloMovil: {
               color: '#0f637d',
               fontSize: 30,
               textAlign: 'center',
               paddingTop: 30,
          },
          container: {
               display: 'flex',
               flexDirection: 'column',
               marginTop: 30,
               color: '#09262e',
               fontSize: '170%',
          },
          numero: {
               marginTop: 5,
               marginBottom: 20,
          },
          info: {
               display: 'flex',
               width: 260,
               alignSelf: 'flex-end',
               justifyContent: 'space-between',
               textAlign: 'end',
               alignItems: 'center',
               margin: '30px 0',
          },
          icono: {
               fontSize: 80,
               color: '#0f637d',
          },
     }));

     const classes = useStyles();

     const info = {
          nombre: 'Jesús París',
          whatsapp: '+584343335555',
          oficina: '+582515554343'
     }

     return (
          <Layout>
               <div className={classes.root}>
                    <h1 className={matchesPhone ? (classes.tituloMovil) : (classes.titulo)}>Comunícate con Nosotros</h1>
                    <div className={classes.container}>
                         <div className={classes.info}>
                              <PermIdentityIcon className={classes.icono}/>
                              <div>
                                   <h3>Nombre</h3>
                                   <p className={classes.numero}>{info.nombre}</p>
                              </div>

                         </div>
                         <div className={classes.info}>
                              <WhatsAppIcon className={classes.icono}/>
                              <div>
                                   <h3>Whatsapp</h3>
                                   <p className={classes.numero}>{info.whatsapp}</p>
                              </div>
                         </div>
                         <div className={classes.info}>
                              <BusinessIcon className={classes.icono}/>
                              <div>
                                   <h3>Oficina</h3>
                                   <p className={classes.numero}>{info.oficina}</p>
                              </div>

                         </div>
                    </div>
               </div>
          </Layout>
     );
}

export default Contacto;