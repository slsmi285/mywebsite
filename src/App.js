import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Particles from 'react-particles-js';
import PlaceToVisit from './components/PlaceToVisit';
import particlesConfig from './config/particlesConfig';




function App() {
  

  return (
    
    <div style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/dahlia3.jpg'})`,
      minHeight: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: 'black',
      }}>

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
