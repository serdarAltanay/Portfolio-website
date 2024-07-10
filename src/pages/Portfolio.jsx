import React, { useState } from 'react';
import 'react-image-lightbox/style.css';

function Portfolio() {
    const [frameVisible, setFrameVisible] = useState(false);
    const [imageSrc, setImageSrc] = useState('');

    const Projects = [];
    for (let i = 1; i < 7; i++) {
        Projects.push((
            <img
                key={i}
                src={`/images/project${i}.jpg`}
                className='shadow-lg portfolio-img'
                onClick={(e) => checkImage(e.target.src)}
                alt={`Project ${i}`}
            />
        ));
    }

    const checkImage = (src) => {
        document.body.style.overflow = 'hidden';
        setFrameVisible(true);
        setImageSrc(src);
    }

    const closeImage = () => {
        document.body.style.overflow = 'auto';
        setFrameVisible(false);
    };

    return (
        <section className='portfolio py-5 bg-light'>
            <div className="container">
                <div className="text-center mb-5">
                    <h4 className='text-uppercase fw-bold text-primary'>
                        Portfolio
                    </h4>
                    <hr className='w-25 mx-auto' />
                    <h2 className='mb-4'>Check Out My Projects</h2>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores obcaecati nihil repudiandae facilis porro deleniti natus? Magnam, dolor cum.
                    </p>
                </div>
                <div className="flex-container">
                    {Projects}
                </div>
                {frameVisible &&
                    <div id='frame'>
                        <button className="close-button btn-lg" onClick={closeImage}><img src="/images/close.png" alt="Close"></img></button>
                        <div id="big-image">
                            <img src={imageSrc} alt="project" />
                        </div>
                        <p className='project-title'>Project Title</p>
                    </div>
                }
            </div>
        </section>
    )
}

export default Portfolio;