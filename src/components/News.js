import React from 'react'
import one from './img/news-300x300-2.jpg'
import two from './img/news-300x300-1.jpg'
import three from './img/news-300x300-4.jpg'
import four from './img/news-300x300-3.jpg'

export default function News(props) {
  return (

    <>
        <div id="news" name='news' className="container-fluid news">
            <div className={`card border-${props.mode === 'light'?'dark':'dark'} mx-2 my-4`} >
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
            </div>
        </div>


    </>
  )
}
