import React from 'react'
import NewNewsComponent from './NewNewsComponent'

export default function NewComponent(props) {
  return (
    // <div style={{border : '5px solid black'}} className="container">
    //         <div className='row'>
    //             <div className="col">

    //                 <div id="news" name='news' className="news">
    //                     <NewNewsComponent mode={props.mode}></NewNewsComponent>
        
    //                 </div>

    //             </div>

    //         </div>

      
    //     {/* </div> */}
    // </div>

    <div className="container">
        <div className="row ">
            <div className={`col d-flex flex-row flex-wrap justify-content-evenly bg-${props.mode === 'light'?'light':'lightgray'} text-${props.mode === 'light'?'dark':'dark'}`}>
                <NewNewsComponent mode={props.mode}></NewNewsComponent>
            </div>
        </div>
    </div>
  )
}
