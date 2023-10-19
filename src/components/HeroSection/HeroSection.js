import React from 'react'
import './HeroSection.css'
import CircleElement from '../../assets/images/circle-element.svg'
import ProfileImg from '../../assets/images/img-profile.png'
import SideElement from '../../assets/images/side-element.svg'

const HeroSection = () => {
  return (
    <section className='heroSection'>
        <div className="container" style={{height: "100%"}}>
            <div className="row" style={{height: "100%"}}>
                <div className="col-5 d-flex flex-column align-self-center name-head">
                    <p className="fs-5" style={{marginBottom: "-7px", marginLeft: "4px", color: "white"}}>Hello it's me</p>
                    <h1 style={{lineHeight: "112px"}}>Deepak Kumar</h1>
                    <div className="d-flex mt-5" style={{width: "80%"}}>
                        <div style={{borderLeft: "2px solid #fff", height: "90px", width: "30px"}}></div>
                        <span className='fs-5'>Coder<br/><span>Web Developer</span><br/><span>Graphic Designer</span></span>
                    </div>
                </div>
                <div className="col-7 d-flex align-items-end" style={{position: "relative"}}>
                    <img src={CircleElement} alt="Circle" style={{width: "90%"}}className='circleImg'/>
                    <div className="social-icon d-flex flex-column fs-4">
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                        <a href="#"><i className="bi bi-github"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-telegram"></i></a>
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-youtube"></i></a>
                        <a href="#"><i className="bi bi-discord"></i></a>
                    </div>
                    <img src={ProfileImg} alt="" className="img-profile"/>
                </div>
            </div>
        </div>
        <img src={SideElement} alt="" class="side-element"></img>
    </section>
  )
}

export default HeroSection