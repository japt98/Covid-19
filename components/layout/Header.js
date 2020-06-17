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

const Header = () => {

     const useStyles = makeStyles((theme) => ({
          contenedorRedes: {
               background: '#0f637d',
          },
          contenedorRedesMovil: {
               background: '#0f637d',
               width: '100%',
               zIndex: '99999',
               position: 'fixed',
               top: 0,
          },
          redes: {
               color: '#fff',
               display: 'flex',
               justifyContent: 'flex-end',
               padding: '5px',
               width: '70%',
               margin: '0 auto',
          },
          redesMovil: {
               color: '#fff',
               display: 'flex',
               justifyContent: 'flex-end',
               padding: '5px',
          },
          menu: {
               color: '#424141',
               padding: '30px',
               display: 'flex',
               justifyContent: 'space-between',
               margin: '0 auto',
               width: '70%',
          },
          menuMovil: {
               color: '#424141',
               padding: '30px',
               marginTop: '40px',
               display: 'flex',
               justifyContent: 'space-between',
          },
          enlace: {
               textDecoration: 'none',
               color: '#fff',
               alignSelf: 'center',
               marginRight: 20,
               marginTop: 5,
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

     const matchesTablet = useMediaQuery('(min-width:1133px)');
     const matchesPhone = useMediaQuery('(min-width:768px)');

     return (
          <div>
               <div className={matchesPhone ? (classes.contenedorRedes) : (classes.contenedorRedesMovil)}>
                    <div className={matchesPhone ? (classes.redes) : (classes.redesMovil)}>
                         {!matchesPhone && (
                              <>
                              <Link href="/global" >
                                   <p className={classes.enlace}>Global</p>
                              </Link>
                              <Link href="/contacto" >
                                   <p className={classes.enlace}>Contacto</p>
                              </Link>
                              </>
                         )}

                         <FacebookIcon
                              style={{
                                   fontSize: 30,
                                   marginRight: '10px',
                              }}
                         />
                         <InstagramIcon
                              style={{
                                   fontSize: 30,
                                   marginRight: '10px',
                              }}
                         />
                         <LinkedInIcon
                              style={{
                                   fontSize: 30,
                                   marginRight: '10px',
                              }}
                         />
                    </div>
               </div>
               <div className={matchesPhone ? (classes.menu) : (classes.menuMovil)}>
                    <div>
                         <div className={classes.logo}>
                              <FavoriteIcon style={{
                                   fontSize: 85,
                                   color: '#0f637d',
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
                                        <BotonMenu>Datos Globales</BotonMenu>
                                   </Link>
                                   <Link href="/contacto">
                                        <BotonMenu>Contacto</BotonMenu>
                                   </Link>
                              </div>
                         </div>
                    ) : null}
               </div>
          </div>
      );
}

export default Header;