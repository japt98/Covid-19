import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {

     const useStyles = makeStyles((theme) => ({
          root: {
            display: 'flex',
            margin: '50px auto',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }));

          const classes = useStyles();

          return (
            <div className={classes.root}>
              <CircularProgress />
            </div>
          );
}

export default Spinner;