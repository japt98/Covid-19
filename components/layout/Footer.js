import React from 'react';
import Link from 'next/link';
import BotonMenu from '../ui/BotonMenu';

//Material UI Icons & Components
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Footer = () => {

     const year = new Date().getFullYear();

     const useStyles = makeStyles((theme) => ({
          contenedor: {
               background: '#09262e',
               color: '#fff',
               padding: 10,
               textAlign: 'center',
          },
          contenedorMenu: {
               width: '100%',
               backgroundColor: '#0e5a71',
          },
          menu: {
               color: '#fff',
               padding: '30px',
               display: 'flex',
               justifyContent: 'space-between',
               margin: '0 auto',
               width: '70%',
          },
          menuMovil: {
               color: '#fff',
               padding: '30px',
               display: 'flex',
               justifyContent: 'space-between',
          },
          link: {
               textDecoration: 'none',
               color: '#fff',
               fontWeight: 400,
               alignSelf: 'center',
               marginRight: 20,
               fontSize: 17,
          },
          logo: {
               display: 'flex',
               textTransform: 'uppercase',
          },
          navegacion: {
               textAlign: 'right',
          },
          hashtag: {
               textTransform: 'none',
          },
          brand: {
               '&:hover': {
                    cursor: 'pointer',
               },
          },
        }));

     const classes = useStyles();

     const matchesTablet = useMediaQuery('(min-width:1128px)');
     const matchesPhone = useMediaQuery('(min-width:768px)');

     return (
          <div>
               <div className={classes.contenedorMenu}>
                    <div className={matchesPhone ? (classes.menu) : (classes.menuMovil)}>
                         <div>
                              <div className={classes.logo}>
                                   <FavoriteIcon style={{
                                        fontSize: 85,
                                        color: '#fff',
                                   }}/>
                                   <div>
                                        <Link href="/">
                                             <h1 className={classes.brand}>¡Infórmate!</h1>
                                        </Link>
                                        {matchesTablet ? (<p>Mantente informado sobre el COVID-19</p>) : (<p>COVID-19</p>)}
                                   </div>
                              </div>
                         </div>
                         {matchesPhone ? (
                              <div className={classes.navegacion}>
                                   {matchesTablet && (<h2 className={classes.hashtag}>#QuédateEnCasa</h2>)}
                                   <div>
                                        <Link href="/global">
                                             <a className={classes.link}>Datos Globales</a>
                                        </Link>
                                        <Link href="/contacto">
                                             <a className={classes.link}>Contacto</a>
                                        </Link>
                                   </div>
                              </div>
                         ) : null}
                    </div>
               </div>
               <div className={classes.contenedor}>
                         <p>Jesús París &copy; {year}</p>
               </div>
          </div>
      );
}

export default Footer;