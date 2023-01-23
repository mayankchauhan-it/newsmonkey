import './App.css';
import './app2.css';
import './sign_cs.css';
import Navbar from './components/Navbar.js'
// import Slider from './components/Slider.js'  
// import Weather from './components/Weather.js'  
// import News from './components/News.js'
import React, {useState} from 'react';

import {BrowserRouter} from 'react-router-dom';
import Sign from './components/Sign';
// import NewComponent from './components/NewComponent';
// import Items from './components/Items';
// import Items2 from './components/Items2';



function App() {

  const [mode, setmode] = useState('light');
  
  const toggleMode = () => {
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'lightgrey'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
    }

  }
  return (
    <>
    <BrowserRouter>
      <Navbar title='NewsMonkey' about='About Us' mode = {mode} toggleMode = {toggleMode}/>
      
      {/* <Slider/> */}

      {/* <div className="container">

      <News mode = {mode} toggleMode = {toggleMode}/>
      </div> */}
      {/* <Items mode = {mode}/> */}
      
      {/* <Items2 mode = {mode}/> */}


      {/* <NewComponent mode={mode}></NewComponent> */}
      {/* <Weather mode={mode}></Weather> */}
      
      <Sign mode={mode}></Sign>

    </BrowserRouter>
    </>
  );
}

export default App;
