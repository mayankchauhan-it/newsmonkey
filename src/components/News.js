import React from 'react'
import NewsItems from './NewsItems'



export default function News(props) {

  return (

    <>
        <div id="news" name='news' className="container-fluid news">



            {/* <NewsItems mode = {mode} toggleMode={toggleMode}></NewsItems> */}
            <NewsItems title='Bollywood' mode={props.mode}></NewsItems>
            <NewsItems title='Cricket' mode={props.mode}></NewsItems>
            <NewsItems title='Crime' mode={props.mode}></NewsItems>
            <NewsItems title='Accidents' mode={props.mode}></NewsItems>

        </div>


    </>
  )
}
