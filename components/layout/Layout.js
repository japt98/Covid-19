import React from 'react';
import Header from './Header';
import Head from 'next/head';
import Footer from './Footer';

//Redux
import {Provider} from 'react-redux';
import store from '../../store';

//Material UI
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline'

const Layout = ({children}) => {

     const matchesPhone = useMediaQuery('(max-width:600px)');
     const matchesTablet = useMediaQuery('(max-width:1522px)');

     const theme = createMuiTheme({
          overrides: {
               MuiCssBaseline: {
                    '@global': {
                         body: {
                              fontFamily: [
                                   'Arial',
                                   'sans-serif'
                              ].join(','),
                              fontWeight: 'lighter',
                              fontSize: 16,
                         },
                         'h1, h2': {
                              fontFamily: [
                                   'Verdana',
                                   'sans-serif'
                              ].join(','),
                              fontWeight: 'bold',
                              textTransform: 'uppercase',
                              margin: 0,
                         },
                         'h3, p': {
                              lineHeight: 1.5,
                              margin: 0
                         }
                    }
               }
          }
     })

     const useStyles = makeStyles((theme) => ({
          media: {
               height: 830,
          },
          mediaMovil: {
               height: 1300,
          },
          mediaTablet: {
               height: 1050,
          },
        }));

     const classes = useStyles();

     return (
          <Provider store={store}>
               <ThemeProvider theme={theme}>
                    <Head>
                         <title>¡Infórmate! #QuédateEnCasa</title>
                         <meta name="description" content="Informacion relativa al Coronavirus"/>
                    </Head>
                    <CssBaseline/>
                    <Header/>
                    <CardMedia
                         className={matchesPhone ? (classes.mediaMovil) : matchesTablet ? (classes.mediaTablet) : (classes.media)}
                         image="/static/images/fondo.webp"
                         children={children}
                    />
                    <Footer/>
               </ThemeProvider>
          </Provider>
      );
}

export default Layout;