import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Vertical_navbar(props) {

  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true);
    console.log('mouse enter');
    
  }

  const handleMouseLeave = () => {
    setIsHover(false)
    console.log('mouse leave');

  }

  const iconStyle = {
    color: isHover  ? 'Dodgerblue' : 'black',
  }


  return (
  <div  className={`mybox `}>

    <div className={`menubar bg-${props.mode === 'light'?'light':'dark'}`}>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className= {`container-fluid my-0 bg-${props.mode === 'light'? 'light' : 'dark'}`} > 
        
        <div  className='logoicon'>
          
          <i style={iconStyle}   className={`fa-brands fa-wikipedia-w text-${props.mode === 'light' || isHover ? iconStyle : 'white'}`} />     
        </div>
        <div>

          <Link style={{color : props.mode === 'light' ? 'Dodgerblue' : 'white'}} className={`navfont `} to="/">{props.title}</Link>
        </div>
      </div>

      {/* <div className={`title bg-${props.mode === 'light'?'light':'dark'}`} >
        <h1 style={{color : props.mode === `light`?'':'white', fontWeight : '900'}} className={`navtitle `}>MENU</h1>
      </div> */}

      <div className={`navbar-nav `}>
          <ul className="navbar-nav3 me-auto mb-2 mb-lg-0 ">
            
                <li className={`nav-item  `}>
                    <Link className={`nav-link active `}  to ="/" containerid="nav"> <i style={{color : props.mode === `light`?'Dodgerblue':'white'}} className={`iconstyle fa-sharp fa-solid fa-people-group`}></i>Marketing</Link>
                </li>

                <li className="nav-item">
                    <Link className={`nav-link active `} onClick='' to= "/sales" containerid="news"><i style={{color : props.mode === `light`?'Dodgerblue':'white'}} className={`iconstyle fa-solid fa-chart-simple`}></i>Sales</Link>
                </li>

                <li className="nav-item">
                    <Link className={`nav-link active `} to="/dispatch" containerid="weather"><i style={{color : props.mode === `light`?'Dodgerblue':'white'}} className={`iconstyle fa-sharp fa-solid fa-truck-ramp-box`} ></i>Dispatch</Link>
                </li>

                <li className="nav-item">
                    <Link className={`nav-link active `} to="/hr" ><i style={{color : props.mode === `light`?'Dodgerblue':'white'}} className={` iconstyle fa-solid fa-suitcase`} ></i>HR</Link>
                </li>

                <li className="nav-item">
                    <Link className={`nav-link active `} to="/purchase" ><i style={{color : props.mode === `light`?'Dodgerblue':'white'}} className={` iconstyle fa-solid fa-tag`}></i>Purchase</Link>
                </li>

                <li className="nav-item">
                    <Link className={`nav-link active `} to="/account" ><i style={{color : props.mode === `light`?'Dodgerblue':'white'}} className={` iconstyle fa-solid fa-user-plus`}></i>Account</Link>
                </li>
                
            </ul>

            <ul className='navbar-nav-bottom'>

              <li className={`nav-item`}>
                {/* <Link className={`nav-link active `}  to ="/" containerid="nav"> <i style={{color : props.mode === `light`?'Dodgerblue':'white'}} className="iconstyle fa-solid fa-sliders-up"/> Setting</Link> */}
                <Link className={`nav-link active `}  to ="/" containerid="nav"> <i style={{color : props.mode === `light`?'Dodgerblue':'white'}} className="iconstyle fa-solid fa-sliders"></i>Setting</Link>
              </li>

              <li className={`nav-item`}>
                <Link className={`nav-link active `}  to ="/" containerid="nav"> <i style={{color : props.mode === `light`?'Dodgerblue':'white'}} className="iconstyle fa-solid fa-right-from-bracket"></i>Log Out</Link>
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

   </div>
  )
}


<i class=""></i>