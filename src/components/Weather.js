import React from 'react'

export default function weather(props) {
    const weather = [
        {
            "location": {
                "name": 'rajkot',
                "region": "Gujarat",
                "country": "India",
                "lat": 22.3,
                "lon": 70.78,
                "tz_id": "Asia/Kolkata",
                "localtime_epoch": 1674288980,
                "localtime": "2023-01-21 13:46"
            },
            "current": {
                "last_updated_epoch": 1674288900,
                "last_updated": "2023-01-21 13:45",
                "temp_c": 25.9,
                "temp_f": 78.6,
                "is_day": 1,
                "condition": {
                    "text": "Sunny",
                    "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                    "code": 1000
                }
            }
        }
    ]
    return (
        <div id='weather'>

            <>
                {
                    (weather || []).map((wer, index) => {
                        return (
                            <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
                                <div className="container py-5 h-100">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                        <div className="col-md-10 col-lg-8 col-xl-6">

                                            <div className={`card bg-${props.mode === 'light' ? 'warning' : 'dark'} text-white`} style={{ borderRadius: "40px;" }}>


                                                <div className="bg-image " style={{ borderRadius: "35px;" }}>
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                                                        className="card-img " alt="weather" />
                                                    <div className="mask " style={{ backgroundColor: "rgba(190, 216, 232, .5);", opacity: '50' }}></div>
                                                </div>



                                                <div className="card-img-overlay text-dark p-5">
                                                    <h2 className="my-1">{wer.location.name.charAt(0).toUpperCase() + wer.location.name.slice(1)}</h2>
                                                    <p className="display-2 fs-3 my-1">{wer.current.temp_c + '°C'}</p>
                                                    <h5>{wer.current.condition.text} <span><img src={wer.current.condition.icon}
                                                        className="card-img w-25 h-25" alt="weather" /></span></h5>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div style={{backgroundColor: props.mode ==='light'?'#F17022':'black'}} className={`container2`}>
                                    <div className="background">
                                        <div style={{backgroundColor: props.mode ==='light'?'rgba(253,184,19,1)':'black'}} className={`Circle1`}></div>
                                        <div style={{backgroundColor: props.mode ==='light'?'rgba(246,140,31,0.7)':'black'}} className="Circle2"></div>
                                        <div style={{backgroundColor: props.mode ==='light'?'rgba(241,125,45,0.7)':'black'}} className="Circle3"></div>
                                        <div className="content">
                                            <h1 className="Condition"><i className="material-icons sun">wb_sunny</i> {wer.current.condition.text}</h1>
                                            <h1 className="Temp">72<span id="F">&#8457;</span></h1>
                                            <h1 className="Time">{wer.current.last_updated.split(" ")[1]}</h1>
                                            <h1 className="Location"><i className="material-icons locationIcon">place</i> {wer.location.name.charAt(0).toUpperCase() + wer.location.name.slice(1)}</h1>
                                        </div>
                                    </div>
                                </div>
                            </section>



                        )
                    })

                },

                {



                }

            </>
        </div>
    )
}
