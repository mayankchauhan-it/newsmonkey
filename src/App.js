import './App.css';
import './app2.css';
import './sign_cs.css';
import './contact.css';
import React, {useState} from 'react';
//,Route, Routes
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Navbar from './components/Navbar.js'
// import Weather from './components/Weather.js'  
import Slider from './components/Slider.js'  
// import Sign from './components/Sign';
// import News from './components/News.js'
import NewComponent from './components/NewComponent';
// import About from './components/About';
import Cpage from './components/Cpage.js';

import VerticalMenu from './components/VerticalMenu';


function App() {


  const [mode, setmode] = useState('light');
  
  const toggleMode = () => {
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'lightgrey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <>
    <BrowserRouter>

      <VerticalMenu title='Woltmart' about='About Us' mode = {mode} toggleMode = {toggleMode}/>

      <div className="container">
        <div>
          <h1>Hello World</h1>
        </div>
      </div>
      {/* <Navbar title='NewsMonkey' about='About Us' mode = {mode} toggleMode = {toggleMode}/> */}

      <Routes className = 'roun'>
        <Route path='/' element = {<Slider mode={mode}/>}></Route>
        <Route path='/hr' element = {<NewComponent mode={mode}></NewComponent>}></Route>
        <Route path='/dispatch' element = {<Cpage mode={mode}></Cpage>}></Route>
        {/* <Route path='/weather' element = {<Weather mode={mode}></Weather>}></Route> */}
        {/* <Route path='/about' element = {<About hoverBackgroundColor={'red'} mode={mode}></About>}></Route> */}
        {/* <Route path='/login' element = {<Sign hoverBackgroundColor={'red'} mode={mode}></Sign>}></Route> */}
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
