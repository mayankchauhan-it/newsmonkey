import React, { Component } from 'react'

export default class Items2 extends Component {
    articles = [
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "IISc-Bengaluru, Canada astronomers detect radio signal from distant galaxy, all details here - The Financial Express",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMilgFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlc3R5bGUvc2NpZW5jZS9paXNjLWJlbmdhbHVydS1jYW5hZGEtYXN0cm9ub21lcnMtZGV0ZWN0LXJhZGlvLXNpZ25hbC1mcm9tLWRpc3RhbnQtZ2FsYXh5LWFsbC1kZXRhaWxzLWhlcmUvMjk1MzY3OS_SAZsBaHR0cHM6Ly93d3cuZmluYW5jaWFsZXhwcmVzcy5jb20vbGlmZXN0eWxlL3NjaWVuY2UvaWlzYy1iZW5nYWx1cnUtY2FuYWRhLWFzdHJvbm9tZXJzLWRldGVjdC1yYWRpby1zaWduYWwtZnJvbS1kaXN0YW50LWdhbGF4eS1hbGwtZGV0YWlscy1oZXJlLzI5NTM2NzkvbGl0ZS8?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-01-19T10:17:11Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Express News Service",
          "title": "DCW chief Swati Maliwal 'dragged' by car outside AIIMS after being 'molested by driver' - The Indian Express",
          "description": "The car driver, Harish Chandra (47), has been apprehended for molestation and voluntarily causing hurt, police said.",
          "url": "https://indianexpress.com/article/cities/delhi/dcw-chief-swati-maliwal-dragged-on-road-outside-aiims-by-car-8391940/",
          "urlToImage": "https://images.indianexpress.com/2023/01/swati-maliwal-759-a-1.jpg",
          "publishedAt": "2023-01-19T09:38:49Z",
          "content": "Delhi Commission for Women Chairperson Swati Maliwal was allegedly molested and dragged for 10-20 metres by a drunk driver after her hand got stuck in his cars window on the road outside AIIMS, said … [+2238 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Technology Networks"
          },
          "author": "Technology Networks",
          "title": "HIV Vaccine Safe but Ineffective - Technology Networks",
          "description": "An investigational HIV vaccine regimen tested among men who have sex with men (MSM) and transgender people was safe but did not provide protection against HIV acquisition, an independent data and safety monitoring board (DSMB) has determined.",
          "url": "https://www.technologynetworks.com/vaccines/news/hiv-vaccine-safe-but-ineffective-369320",
          "urlToImage": "https://assets.technologynetworks.com/production/dynamic/images/content/369320/hiv-vaccine-safe-but-ineffective-369320-640x360.jpg?cb=20230119",
          "publishedAt": "2023-01-19T09:16:01Z",
          "content": "An investigational HIV vaccine regimen tested among men who have sex with men (MSM) and transgender people was safe but did not provide protection against HIV acquisition, an independent data and saf… [+2637 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "NASA Astronomy Picture of the Day 19 January 2023: Bewitching Star-forming Seagull Nebula - HT Tech",
          "description": "NASA Astronomy Picture of the Day 19 January 2023: Bewitching Star-forming Seagull Nebula located in the constellation Monoceros.",
          "url": "https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-19-january-2023-bewitching-star-forming-seagull-nebula-71674116701214.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2023/01/19/1600x900/nasa_1674116812089_1674116821256_1674116821256.jpg",
          "publishedAt": "2023-01-19T08:28:25Z",
          "content": "NASA defines stars as the most widely recognized astronomical objects, and represent the most fundamental building blocks of galaxies. They are celestial objects millions of years old floating in spa… [+1848 chars]"
        }
      ]


      constructor(){
        super();
    
        this.state = {
            articles: this.articles,
            loading: false
        };
        }


  render(props) {
    return (
        <div className='container my-5 py-3'>
        <div className="row">
            {this.state.articles((element)=>{
               
                return <div className="card col-md-4 mx-2" style={ {width : "18rem", backgroundColor : "lightgray"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title xfont">{this.state.articles}</h5>
                            
                            <p className="card-text" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className={`btn rounded-pill btn-${this.props.mode === 'light'? 'dark':'light'}`}>Go somewhere</a>
                        </div>
        </div>
                
            })}

        </div>
    </div>
    )
  }
}
