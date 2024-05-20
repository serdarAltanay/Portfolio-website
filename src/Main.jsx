import React from 'react'

function Main() {
  return (
    <header className='header vh-100 position-relative text-center'>
        <div className='text-container position-relative d-flex flex-column justify-content-center align-items-center h-100'>
            <div className='text-primary fs-3 fw-bold text-uppercase'>Hello World</div>
            <h1 id="typing-text" className='display-1 fw-bold text-white'>I am ABC</h1>
            <p className="roles text-white text-uppercase fs-4">
              <span>Fullstack Web Developer</span>
            </p>
            <a href="#about" className='btn btn-outline-light btn-lg mt-3' >
              <div className="d-flex">
                <div className="me-3">
                  <i className='fas fa-chevron-down'></i>
                </div>
                <div className="text-start">
                  <span>More About Me</span>
                </div>
              </div>
            </a>
            <div className="social d-flex gap-2 position-absolute">
              <button className='btn btn-white'>
                <i className='fab fa-twitter fa-3x text-white'></i>
              </button>
              <button className='btn btn-white '>
                <i className='fab fa-instagram fa-3x text-white'></i>
              </button>
              <button className='btn btn-white '>
                <i className='fab fa-linkedin fa-3x text-white'></i>
              </button>
              <button className='btn btn-white '>
                <i className='fab fa-github fa-3x text-white'></i>
              </button>
            </div>
        </div>
    </header>
  )
}

export default Main