import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BotonMenu = withStyles({
     root: {
       boxShadow: 'none',
       textTransform: 'none',
       fontSize: 20,
       color: '#0f637d',
       fontWeight: 400,
       margin: '3px 0 3px 6px',
       padding: '6px 12px',
       lineHeight: 1.5,
       fontFamily: [
         'Arial',
         'sans-serif'
       ].join(','),
       '&:hover': {
         backgroundColor: '#0f637d',
         color: '#fff',
         boxShadow: 'none',
       },
       '&:active': {
        backgroundColor: '#0f637d',
        color: '#fff',
        boxShadow: 'none',
       },
     },
   })(Button);

   export default BotonMenu;