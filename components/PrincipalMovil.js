import React, { useEffect, useState } from 'react';
import Consulta from './Consulta';
import Link from 'next/link';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { iniciarConsulta } from '../store/actions/consultaAction';
import { obtenerPaises } from '../store/actions/listadoAction';

//Material UI
import { makeStyles } from '@material-ui/core';
import BotonPrimario from './ui/BotonPrimario';
import { FormHelperText } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const PrincipalMovil = () => {

  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '90%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
    },
    encabezado:{
      color: '#0f637d',
      margin: '30px 0px 20px 5px',
      fontSize: 30,
      textAlign: 'center',
    },
    texto: {
      lineHeight: 1.5,
      fontSize: 19,
      color: '#424141',
      textAlign: 'center',
    },
    contenedorBoton: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    buscador: {
      marginTop: 30,
      marginBottom: 20,
      color: '#0f637d',
      fontSize: 35,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    formControl: {
      width: '100%',
      height: 100,
    }
  }));

  const classes = useStyles();

  const [paisConsulta, setPaisConsulta] = useState('');
  const [error, setError] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    if (paisConsulta.trim() === '') {
      setError(true);
      return;
    };
    setError(false);
    dispatch(iniciarConsulta(`https://api.covid19api.com/live/country/${paisConsulta}`));
  };

  let listadoPaises = useSelector(state => state.paises.listadoPaises);

     useEffect(() => {
     dispatch(obtenerPaises());
     }, []);

     if (listadoPaises !== null) {
     listadoPaises.sort(function (a, b) {
          if (a.Country > b.Country) {
          return 1;
          }
          if (a.Country < b.Country) {
          return -1;
          }
          // a must be equal to b
          return 0;
     });
     }

     return (
        <div className={classes.root}>
              <h2 className={classes.buscador}>Busca Datos</h2>
              <FormControl error={error} className={classes.formControl}>
                    <InputLabel
                          id="demo-simple-select-outlined-label"
                          style={{
                              fontSize: 30,
                          }}>País</InputLabel>
                    <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          label="Pais"
                          value={paisConsulta}
                          onChange={e => setPaisConsulta(e.target.value)}
                          style={{
                              width: '100%',
                              height: 50,
                          }}
                    >
                          <MenuItem
                              value=""
                              style={{fontSize: 20}}
                          >-- Seleccione --</MenuItem>
                          {listadoPaises !== null && (
                            listadoPaises.map(pais => (
                              <MenuItem
                                value={pais.ISO2}
                                key={pais.ISO2}
                                style={{
                                  fontSize: 20,
                                }}
                              >{pais.Country}</MenuItem>
                            ))
                          )}
                    </Select>
                    {error && <FormHelperText style={{fontSize: 18}}>Indica un País</FormHelperText>}
                </FormControl>
               <div className={classes.contenedorBoton}>
                    <BotonPrimario
                         onClick={handleClick}
                    >Buscar</BotonPrimario>
               </div>
              <Consulta/>
              <h1 className={classes.encabezado}>Conoce la información actual sobre el coronavirus.</h1>
              <p className={classes.texto}>Dentro de este portal podrás conocer datos a tiempo real de cualquier país, también podrás recibir información personalizada.</p>
              <div className={classes.contenedorBoton}>
                <Link href="/info">
                  <BotonPrimario>Recibir Info</BotonPrimario>
                </Link>
              </div>
        </div>
      );
}

export default PrincipalMovil;