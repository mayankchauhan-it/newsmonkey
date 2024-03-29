import React from 'react'

export default function about(props) {
    return (
        <>
            <div className="container mt-5 ">

                <div className="accordion accordion-flush " id="accordionFlushExample">
                    <div style={{ backgroundColor: props.mode === 'light' ? 'white' : 'lightgray', fontWeight: 500 }} className={`accordion-item my-2`}>
                        <h2 className="accordion-header " id="flush-headingThree">
                            <button style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'light' ? 'black' : 'white' }} className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseFour">
                                Accordion Item #1
                            </button>
                        </h2>


                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'dark'}`}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>


                    <div style={{ backgroundColor: props.mode === 'light' ? 'white' : 'lightgray', fontWeight: 500 }} className={`accordion-item my-2`}>
                        <h2 className="accordion-header " id="flush-headingThree">
                            <button style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'light' ? 'black' : 'white' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseFour">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse text-dark" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'dark'}`}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: props.mode === 'light' ? 'white' : 'lightgray', fontWeight: 500 }} className={`accordion-item my-2`}>
                        <h2 className="accordion-header " id="flush-headingThree">
                            <button style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'light' ? 'black' : 'white' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseFour">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse text-dark" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'dark'}`}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: props.mode === 'light' ? 'white' : 'lightgray', fontWeight: 500 }} className={`accordion-item my-2`}>
                        <h2 className="accordion-header " id="flush-headingTwo">
                            <button style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'light' ? 'black' : 'white' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Accordion Item #4
                            </button>
                        </h2>


                        <div style={{ color: 'red' }} id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'dark'}`}>Placeholder content for t12312132121312his accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
