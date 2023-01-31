import React from 'react'

export default function Sign(props) {
    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg" alt="Image2" className="img-fluid" />
                        </div>
                        <div className="col-md-6 contents">
                            <div className="row justify-content-center">
                                <div className="col-md-8 ">
                                    <div className="mb-4">
                                        {/* <h3 className={`mb-4 text-${props.mode === 'light'?'dark':'dark'}`}>Sign In</h3> */}
                                        <h3 style={{ color: props.mode === 'light' ? 'orange' : 'black', fontSize : '40px' }} className={`mb-4`}>Sign In</h3>
                                        <p className={`mb-4 fs-6`}>Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                                    </div>
                                    <form action="#" method="post">
                                        <div className="form-group first ">
                                            <label className="text-dark fw-bold" HTMLfor="username">Username</label>
                                            <input type="text" className="form-control " id="username" />
                                        </div>
                                        <div className="form-group last mb-4">
                                            <label className="text-dark fw-bold" HTMLfor="password">Password</label>
                                            <input type="password" className="form-control" id="password" />
                                        </div>
                                        <div className="d-flex mb-5 align-items-center">
                                            <label className="control control-checkbox mb-0"><span className={`caption mx-2 text-${props.mode === 'light' ? 'dark' : 'dark'}`} >Remember me</span>
                                            </label>
                                            <span className="ml-auto"><a href="/" className="forgot-pass text-decoration-none">Forgot Password</a></span>
                                        </div>
                                        <input style={{ backgroundColor: props.mode === 'light' ? 'orange' : 'black' , borderRadius : '2rem' }} type="submit" value="Log In" className={`btn btn-block text-${props.mode === 'light' ? 'dark' : 'white'}`} />
                                        <span className="d-block text-left my-4 text-muted">— or login with —</span>


                                        <div className="social-login">
                                            <div className="btn-group">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="me-1  bi bi-twitter" viewBox="0 0 16 16">
                                                    <path style={{ color: props.mode === 'light' ? 'orange' : 'black' }} d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>

                                                <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="me-1  bi bi-facebook" viewBox="0 0 16 16">
                                                    <path style={{ color: props.mode === 'light' ? 'orange' : 'black' }} d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="me-1 bi bi-google" viewBox="0 0 16 16">
                                                    <path style={{ color: props.mode === 'light' ? 'orange' : 'black' }} d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="me-1 bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path style={{ color: props.mode === 'light' ? 'orange' : 'black' }} d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                </svg>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="js/jquery-3.3.1.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/main.js"></script>
            <script defer="" src="https://static.cloudflareinsights.com/beacon.min.js/vaafb692b2aea4879b33c060e79fe94621666317369993" integrity="sha512-0ahDYl866UMhKuYcW078ScMalXqtFJggm7TmlUtp0UlD4eQk0Ixfnm5ykXKvGJNFjLMoortdseTfsRT8oCfgGA==" data-cf-beacon="{&quot;rayId&quot;:&quot;78dea0e32f3cf2f7&quot;,&quot;token&quot;:&quot;cd0b4b3a733644fc843ef0b185f98241&quot;,&quot;version&quot;:&quot;2022.11.3&quot;,&quot;si&quot;:100}" crossorigin="anonymous"></script>



        </>
    )
}
