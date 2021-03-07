import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Particles from 'react-particles-js';
import PlaceToVisit from './components/PlaceToVisit';
import particlesConfig from './config/particlesConfig';
import dahlia3 from './assets/dahlia3.jpg';






// const useStyles = makeStyles({
//   root: {
//     minHeight: '100vh',
//     backgroundImage: `url(${dahlia3})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   },



// });


function App() {
  // const classes = useStyles();

  return (
    // <div className={classes.root}>
    <div style={{ backgroundImage: `url(${dahlia3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>

      <CssBaseline />
      <div style={{ position: 'absolute' }}>
        <Particles width="100vw" params={particlesConfig} />
      </div>
      <Header />


      <PlaceToVisit />
      {/* <ModalContact /> */}



    </div>
  );



}


export default App;
