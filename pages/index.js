import React from 'react';
import Principal from '../components/Principal';
import PrincipalMovil from '../components/PrincipalMovil';
import Layout from '../components/layout/Layout'

//Material UI
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Home = () => {

  const matchesPhone = useMediaQuery('(max-width:768px)');

  return (
    <Layout>
      {matchesPhone ? (
        <PrincipalMovil/>
        ) : (
        <Principal/>
        )}
    </Layout>
   );
}

export default Home;

