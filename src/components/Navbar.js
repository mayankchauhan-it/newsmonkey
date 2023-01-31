import React from 'react'
// import AnchorLink from "react-anchor-link-smooth-scroll";

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Navbar(props) {
  return (
    <>
        <div id='nav' className='sticky-top'>
        <nav className={`navbar navbar-expand-lg bg-${props.mode === 'light'?'white':'dark'} navbar-${props.mode} `}>
            <div className= {`container-fluid  my-0 `} >

                {/* Logo space */}

                <Link className={`cfont navbar-brand`} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* Menu List */}
                <div className=" navbar-nav  " id="navbarSupportedContent">

                    <ul className="navbar-nav3 me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item ">
                            <Link className={`nav-link active  `}  to ="/" containerid="nav">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active `} onClick='' to= "/hr" containerid="news">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active `} to="/weather" containerid="weather">Weather</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active `} to="/about" >{props.about}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active `} to="/contact" >Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active `} to="/login" >Login</Link>
                        </li>

                        <div className={`form-check `} type="checkbox" id="flexSwitchCheckDefault">
                            <label className="switch">
                                <input type="checkbox" onClick={props.toggleMode}/>
                                <span className={`slider border border-${props.mode==='light'?'warning':'light'} bg-${props.mode==='light'?'warning':'dark'}`  }></span>
                            </label>
                        </div>
                    </ul>
                    
                </div>

            </div>
        </nav>
    </div>
    </>
  )
}


Navbar.prototype = {
    title : PropTypes.string,
    about : PropTypes.string,
    contact : PropTypes.string
}


Navbar.defaultProps = {
    about : "About",
    contact : "Contact Us"
}