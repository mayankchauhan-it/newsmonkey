import React from 'react'
import NewsItems from './NewsItems'
// import { useState } from 'react'


export default function News(props) {

    // const [mode, setmode] = useState('light');

    // const toggleMode = () => {
    //     if (mode === 'light'){
    //       setmode('light');
    //       document.body.style.backgroundColor = 'lightgrey'
    //     }
    //     else{
    //       setmode('dark');
    //       document.body.style.backgroundColor = 'white'
    //     }
    
    //   }

  return (

    <>
        <div id="news" name='news' className="container-fluid news">



            {/* <NewsItems mode = {mode} toggleMode={toggleMode}></NewsItems> */}
            <NewsItems title='Bollywood' mode={props.mode}></NewsItems>
            <NewsItems title='Cricket' mode={props.mode}></NewsItems>
            <NewsItems title='Crime' mode={props.mode}></NewsItems>
            <NewsItems title='Accidents' mode={props.mode}></NewsItems>


            {/* <div className={`card border-${props.mode === 'light'?'dark':'dark'} mx-2 my-4`} >
                <img src={one} className="card-img-top" alt="..."/>
                <div className={`card-body bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'light'?'dark':'light'}`}>
                    <h5 className="card-title xfont">Bollywood</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className={`btn rounded-pill btn-${props.mode === 'light'? 'dark':'light'}`}>Go somewhere</a>
                </div>
            </div>

            <div className={`card border-${props.mode === 'light'?'dark':'dark'} mx-2 my-4`} >
                <img src={two} className="card-img-top" alt="..."/>
                <div className={`card-body bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'light'?'dark':'light'}`}>
                    <h5 className="card-title xfont">Cricket</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className={`btn rounded-pill btn-${props.mode === 'light'? 'dark':'light'}`}>Go somewhere</a>
                </div>
            </div>

            <div className={`card border-${props.mode === 'light'?'dark':'dark'} mx-2 my-4`} >
                <img src={three} className="card-img-top " alt="..."/>
                <div className={`card-body bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'light'?'dark':'light'}`}>
                    <h5 className="card-title xfont">Crime</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className={`btn rounded-pill btn-${props.mode === 'light'? 'dark':'light'}`}>Go somewhere</a>
                </div>
            </div>

            <div className={`card border-${props.mode === 'light'?'dark':'dark'} mx-2 my-4`} >
                <img src={four} className="card-img-top " alt="..."/>
                <div className={`card-body bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'light'?'dark':'light'}`}>
                    <h5 className="card-title xfont">Accidents</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className={`btn btn-${props.mode === 'light'? 'dark':'light'} rounded-pill`}>Go somewhere</a>
                </div>
            </div> */}
        </div>


    </>
  )
}
