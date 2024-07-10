import React from 'react'

function StatsAndForms() {
  return (<>
   <section className="stats py-5 text-bg-secondary">
    <div className="container">
        <div className="row g-0">
            <div className="col-md-4 col-lg-2">
                <div className="stat text-center border-end border-dark">
                    <i className='fas fa-users fa-3x mb-3'></i>
                    <p className='fs-1'>500+</p>
                    <h3 className='fs-6 text-uppercase'>Clients</h3>
                </div>
            </div>
            <div className="col-md-4 col-lg-2">
                <div className="stat text-center border-end border-dark">
                    <i className='fas fa-project-diagram fa-3x mb-3'></i>
                    <p className='fs-1'>700+</p>
                    <h3 className='fs-6 text-uppercase'>Projects</h3>
                </div>
            </div>
            <div className="col-md-4 col-lg-2">
                <div className="stat text-center border-end border-dark">
                    <i className='fas fa-clock fa-3x mb-3'></i>
                    <p className='fs-1'>5+</p>
                    <h3 className='fs-6 text-uppercase'>Years</h3>
                </div>
            </div>
            <div className="col-md-4 col-lg-2">
                <div className="stat text-center border-end border-dark">
                    <i className='fas fa-book fa-3x mb-3'></i>
                    <p className='fs-1'>100+</p>
                    <h3 className='fs-6 text-uppercase'>Publications</h3>
                </div>
            </div>
            <div className="col-md-4 col-lg-2">
                <div className="stat text-center border-end border-dark">
                    <i className='fas fa-play fa-3x mb-3'></i>
                    <p className='fs-1'>1.2M+</p>
                    <h3 className='fs-6 text-uppercase'>Subscribers</h3>
                </div>
            </div>
            <div className="col-md-4 col-lg-2">
                <div className="stat text-center">
                    <i className='fas fa-graduation-cap fa-3x mb-3'></i>
                    <p className='fs-1'>100K+</p>
                    <h3 className='fs-6 text-uppercase'>Students</h3>
                </div>
            </div>
        </div>
    </div>
   </section>
   <section className="contact-form text-bg-dark bg-gradient py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="text-center mb-5">
                        <h1 className='text-uppercase fw-bold text-primary'>Contact</h1>
                        <hr className='w-25 mx-auto' />
                        <h2 className='mb-4'>I'd love to hear from you.</h2>
                        <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi totam dolor minima non itaque quibusdam. Incidunt odio libero dicta error sit voluptatum, voluptas, suscipit quos eum cumque voluptatibus magnam commodi.</p>
                    </div>
                    <form action="">
                        <div className="mb-5">
                            <input 
                            type='text'
                            className="input form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white" placeholder="Name">
                            </input>
                         </div>
                        <div className="mb-5">
                            <input 
                            type='email'
                            className="input form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white" placeholder="Email">
                            </input>
                        </div>
                        <div className="mb-5">
                            <textarea 
                            className="input form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white" placeholder="Message">
                            </textarea>
                        </div>
                        <div className="mb-5 d-grid">
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
   </section>
   </>
  )
}

export default StatsAndForms