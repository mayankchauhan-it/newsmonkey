import React, { Component } from "react";
import one from './img/news-500x280-5.jpg'
import two from './img/news-500x280-3.jpg'
import three from './img/news-500x280-4.jpg'


export default class slider extends Component {
  render() {
    return (
      
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>


        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={one} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={two} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={three} className="d-block w-100" alt="..." />
          </div>
        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        
      </div>
       
    );
  }
}

// import React from 'react'

// export default function Slider() {
//   return (
//     <div>
//       Hello
//     </div>
//   )
// }
