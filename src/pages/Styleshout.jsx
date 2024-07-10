
import React from 'react'

const handleClick = () =>{
    window.location.href = "https://www.example.com"
}

function Styleshout() {
  return (<>
    <section className='styleshout text-bg-dark bg-gradient p-6 text-center'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Shouthout to StyleShout</h1>
                        <hr className='w-25 mx-auto' />
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, tenetur ex nostrum ab odit modi delectus sed earum inventore, dignissimos suscipit excepturi unde! Error, sint debitis. Laboriosam unde aspernatur dolore.
                        </p>
                        <button onClick={handleClick} target='_blank' className='btn btn-primary btn-lg text-uppercase'>Visit Styleshout</button>
                </div>
            </div>
        </div>
    </section>
    <section className='services text-bg-dark py-5 position-relative'>
        <div className="container">
            <div className="text-center mb-5">
                <h1 className='text-uppercase fw-bold text-primary'>
                    Services
                </h1>
                <hr  className='w-25 mx-auto'/>
                <h2 className='mb-4'>What Can I Do For You ?</h2>
                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam officiis ad facilis rerum odit, amet asperiores atque hic. Repudiandae inventore iusto iste odio, voluptatibus culpa tenetur sint illum quis doloribus consequuntur ipsam reprehenderit adipisci dolore saepe voluptate? Vitae, dolor?</p>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                    <i className="fas fa-globe fa-3x text-primary mb-3"></i>
                    <h3 className='fs-3'>Web Design</h3>
                    <hr  className='w-25 mx-auto'/>
                    <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam unde magnam et nesciunt facilis ut consequatur quaerat cumque culpa.</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="fas fa-code fa-3x text-primary mb-3"></i>
                    <h3 className='fs-3'>Web Development</h3>
                    <hr  className='w-25 mx-auto'/>
                    <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam unde magnam et nesciunt facilis ut consequatur quaerat cumque culpa.</p>
                </div>
                <div className="col-md-4 text-center">
                    <i className="fas fa-shopping-cart fa-3x text-primary mb-3"></i>
                    <h3 className='fs-3'>Advetising & SEO </h3>
                    <hr  className='w-25 mx-auto'/>
                    <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam unde magnam et nesciunt facilis ut consequatur quaerat cumque culpa.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Styleshout