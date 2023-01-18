import './App.css';
import Navbar from './components/Navbar.js'
import Slider from './components/Slider.js'
import News from './components/News.js'
import React, {useState} from 'react';

import {BrowserRouter} from 'react-router-dom';



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
      
      
    
    
      <Slider/>

      <div className="container">

      <News mode = {mode} />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
