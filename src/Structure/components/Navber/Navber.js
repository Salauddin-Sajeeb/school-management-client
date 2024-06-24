import React from 'react'
import './Navber.css';
import navlogo from '../../images/logo/logo.jpg'

const Navber = () => {
  return (
    <>
    <section >
    <nav style={{backgroundColor: '#FFFFFFD4'}} className="navbar navbar-expand-lg  shadow ">
  <div className="container">
    <img style={{width:'80px', height: '68px' }} src={navlogo} alt=""/>
   
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"><i style={{color: 'gray'}} className="fa-solid fa-align-justify"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ms-auto pr-4">
        <li className="nav-item px-3">
          <a style={{color: '#333365', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap', transition: '0.3s' , lineHeight: '40px', textTransform: 'uppercase'}} className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item  px-3">
          <a style={{color: '#333365', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap', transition: '0.3s' , lineHeight: '40px', textTransform: 'uppercase'}} className="nav-link " href="#">About</a>
        </li>
        <li className="nav-item  px-3">
          <a style={{color: '#333365', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap', transition: '0.3s' , lineHeight: '40px', textTransform: 'uppercase'}} className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item  px-3">
          <a style={{color: '#333365', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap', transition: '0.3s' , lineHeight: '40px', textTransform: 'uppercase'}} className="nav-link " href="#">Contact</a>
        </li>
        <li className="nav-item  px-3">
          <a style={{color: '#333365', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap', transition: '0.3s' , lineHeight: '40px', textTransform: 'uppercase'}} className="nav-link " href="#">Gallery</a>
        </li>
        <li className="nav-item px-3 ">
          <a  style={{color: '#333365', fontSize: '15px', fontWeight: '500', whiteSpace: 'nowrap', transition: '0.3s' , lineHeight: '40px', textTransform: 'uppercase'}} className="nav-link" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </section>
    </>
  )
}

export default Navber