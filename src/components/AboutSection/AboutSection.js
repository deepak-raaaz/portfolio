import React from 'react'
import './AboutSection.css'
import AboutImg from '../../assets/images/about-section-img.jpg'

const AboutSection = () => {
  return (
        <section className="aboutSection">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={AboutImg} alt="" srcset="" className='about-img'/>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>
        </section>
  )
}

export default AboutSection