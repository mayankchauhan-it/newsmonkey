import React from 'react'
import { useState } from 'react'


export default function contact_page(props) {
    
    
    return (
    

    
    <div>

        <div className="background">
        <div className="container fs-3">
            <div className={`screen bg-${props.mode === 'light'?'warning':'dark'}`}>
            <div className={`screen-header bg-${props.mode === 'light'?'warning':'dark'}`}>
                <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                </div>
            </div>
            <div className="screen-body">
                <div className="screen-body-item left">

                <div  className="app-title">
                    <span>CONTACT</span>
                    <span>US</span>
                </div>

                
                </div>
                <div className="screen-body-item">
                <div className="app-form">
                    <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME" />
                    </div>
                    <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL"/>
                    </div>
                    <div className="app-form-group">
                    <input className="app-form-control " placeholder="CONTACT NO"/>
                    </div>
                    <div className="app-form-group message">
                    <input className="app-form-control" placeholder="MESSAGE"/>
                    </div>
                    <div className="app-form-group buttons">
                    <button className="app-form-button text-light">CANCEL</button>
                    <button onMouseEnter={() => useState('red')}  className="app-form-button">SEND</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>


    </div>
  )
}
