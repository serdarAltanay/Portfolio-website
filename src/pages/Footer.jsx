import React from 'react'

function Footer() {
  return (
    <div className='py-5 text-bg-dark'>
        <div className="container d-flex">
            <p className='flex-grow-1'>
                Copyright &copy; 2024 | Designed By StyleShout
            </p>
            <div className="h-stack gap-3">
                <i className='fab fa-facebook fa-2x text-white pe-3'></i>
                <i className='fab fa-twitter fa-2x text-white pe-3'></i>
                <i className='fab fa-linkedin fa-2x text-white pe-3'></i>
            </div>
        </div>
    </div>
  )
}

export default Footer