import React from 'react'

function About() {
  return (
    <>
    <section id='about' className='about bg-light py-5'>
        <div className="container">
            <div className="text-center">
                <h4 className='text-uppercase fw-bold text-primary'>
                    About Me
                </h4>
                <hr className='w-25 mx-auto' />
                <h2 className='my-4 text-warning'>Let Me Introduce Myself</h2>
            </div>
            <div className="about-content d-flex gap-5 align-items-center h-100 mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className='image-container about-img'>
                            <img src="https://randomuser.me/api/portraits/lego/7.jpg" alt="" className='rounded rounded-circle img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <p className="lead mt-5 ms-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iusto in dolorem quasi dolor quod nisi debitis ad nam a commodi perspiciatis odit molestias cum eaque facere, fuga quia quibusdam ex porro. Ad dolorem aperiam illo quae aliquam. Accusantium sapiente sequi rerum atque nihil eligendi deserunt a architecto dolor sint.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section className='profile my-6'>
        <div className="container">
            <div className="row">
            <h3 className='text-uppercase fw-bold my-5'>Profile</h3>
                <div className="col-md-6">
                    
                    <ul className="list-group list-group-flush">
                        <li className='list-group-item mb-3'>
                            <h5 className='text-transform'>
                                <i className='fas fa-user text-primary me-3'></i>Full Name:
                            </h5>
                            <p>Lego Man</p>
                        </li>
                        <li className='list-group-item mb-3'>
                            <h5 className='text-transform'>
                                <i className='fas fa-calendar text-primary me-3'></i>Birth Date:
                            </h5>
                            <p>01/01/1985</p>
                        </li>
                        <li className='list-group-item mb-3'>
                            <h5 className='text-transform'>
                                <i className='fas fa-envelope text-primary me-3'></i>Website:
                            </h5>
                            <p>legoman.com</p>
                        </li>
                        <li className='list-group-item mb-3'>
                            <h5 className='text-transform'>
                                <i className='fas fa-building text-primary me-3'></i>Current Position:
                            </h5>
                            <p>Web Artist</p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h4 className='fw-bold ms-3'>Skills:</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum fugiat? Ab rerum voluptatibus, aspernatur reiciendis sunt exercitationem repellendus optio?
                    </p>
                    <h5><i className='fas fa-check text-primary me-3'></i>HTML5</h5>
                    <div 
                        className="progress mb-3" 
                        role='progressbar'
                        aria-valuenow= "75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        <div className="progress-bar w-100">100%</div>
                    </div>
                    <h5><i className='fas fa-check text-primary me-3'></i>CSS</h5>
                    <div 
                        className="progress mb-3" 
                        role='progressbar'
                        aria-valuenow= "75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        <div className="progress-bar w-75">75%</div>
                    </div>
                    <h5><i className='fas fa-check text-primary me-3'></i>Javascript</h5>
                    <div 
                        className="progress mb-3" 
                        role='progressbar'
                        aria-valuenow= "75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        <div className="progress-bar w-50">50%</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <button className='btn btn-outline-dark btn-lg px-5 my-3'>Hire Me Now</button>
                    <button className='btn btn-dark btn-lg px-5 my-3 ms-4'>Download CV</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About