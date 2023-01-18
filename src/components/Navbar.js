import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Navbar(props) {
  return (
    <>
        <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode === 'light'?'white':'dark'} navbar-${props.mode}`}>
            <div className= {`container-fluid  my-0 `} >

                {/* Logo space */}

                <Link className={`cfont navbar-brand `} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* Menu List */}
                <div className=" navbar-nav  " id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item ">
                            <Link className={`nav-link active  `}  to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active `} to= "/News" containerId="news">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active `} to="/about" >Weather</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active `} to="/about" >{props.about}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active `} to="/about" >Contact us</Link>
                        </li>

                        
                    </ul>
                    
                    
                {/* toggleButton */}
                <div className={`form-check form-switch `}>
                    <input className={`form-check-input bg-${props.mode === 'light'?'white':'dark'} border-${props.mode === 'light'?'dark': 'white'}`} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?'Dark Mode':'Light Mode'}</label>
                </div>
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