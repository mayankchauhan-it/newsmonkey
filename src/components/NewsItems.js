import React from 'react'
import one from './img/news-300x300-2.jpg'

import { useEffect, useState } from "react";



export default function NewsItems(props) {
 
    const [user, setUser] = useState([]);

    const fetchData = () => {
        return fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=bf602ecf0c464760888a596fc5bc85a4")
              .then((response) => response.json())
              .then((data) => setUser(data));
              
      }

    console.log("========user============",user);

    useEffect(() => {
        fetchData();
      },[])

  return (
    <>
        <div className={`card border-${props.mode === 'light'?'dark':'dark'} mx-2 my-4`} >
                <img src={one} className="card-img-top" alt="..."/>
                <div className={`card-body bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'light'?'dark':'light'}`}>
                    <h5 className="card-title xfont">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className={`btn rounded-pill btn-${props.mode === 'light'? 'dark':'light'}`}>Go somewhere</a>
                </div>
                {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
            </div>

    </>
  )
}
