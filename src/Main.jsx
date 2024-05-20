import React from 'react'
import { useState, useEffect} from 'react';

function Main() {

  const delay = 200;
  const text = "I am ABCD"


  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);


  return (
    <header className='header vh-100 position-relative text-center'>
        <div className='text-container position-relative d-flex flex-column justify-content-center align-items-center h-100'>
            <div className='text-primary fs-3 fw-bold text-uppercase'>Hello World</div>
            <h1 id="typing-text" className='display-1 fw-bold text-white'>{currentText}</h1>
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