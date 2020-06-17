import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BotonPrimario = withStyles({
     root: {
          textTransform: 'none',
          fontSize: 30,
          color: '#fff',
          padding: '6px 12px',
          marginTop: 30,
          border: '1px solid',
          lineHeight: 1.5,
          backgroundColor: '#0f637d',
          borderColor: '#0f637d',
          fontFamily: [
               'Arial',
               'sans-serif'
             ].join(','),
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#0f637d',
            color: '#0f637d',
            boxShadow: 'none',
          },
     },
     })(Button);

   export default BotonPrimario;