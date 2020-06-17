import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';

const Input = ({id, input, type, meta : {touched, error}}) => {

     const useStyles = makeStyles((theme) => ({
          input: {
               fontSize: 16,
               borderRadius: 5,
               border: 'none',
               padding: 20,
               margin: '10px 0',
               color: '#424141',
               backgroundColor: 'rgba(27, 98, 110,.1)',
          },
     }));

     const classes = useStyles();

     return (
              <input
                    type={type}
                    id={id}
                    className={classes.input}
                    {...input}
               />
     );

}

export default Input;