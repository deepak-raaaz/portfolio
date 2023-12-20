import React from 'react'
import CircleElement from '../../assets/images/circle-element.svg'
import ProfileImg from '../../assets/images/img-profile.png'
import styled from '@emotion/styled'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { Typewriter, Cursor } from 'react-simple-typewriter';

function HeroSection() {
    return (
        <div className='hero-section relative bg-cover bg-center min-h-[45rem] max-h-[60rem] h-[100vh] flex items-center' style={{ backgroundImage: `url('https://res.cloudinary.com/dxmvkaoql/image/upload/v1702208876/portfolio/site-assets/qu0hjscukijt2iyi95jc.png')` }}>
            <div className='absolute inset-0 bg-gradient-to-r from-[#131313] from-10% via-[#131313] via-30% to-transparent to-100%'></div>
            <div className='h-[100%]  grid grid-cols-12 gap-4 overflow-hidden xl:max-w-screen-xl container mx-auto relative px-6 '>
                <div className='col-span-5  max-md:cl-span-5 flex flex-col justify-center  max-lg:col-span-12 max-lg:pt-[7rem] max-lg:items-center'>
                    {/* Content for the left side */}

                    <h4 className='text-[#a0a0a0 text-whit gradient-text2   font-rubik text-[2rem] -mb-2 mt-12 max-lg:mt-0 max-lg:text-[1.5rem] max-sm:text-[1rem] max-sm:mt-4 max-sm:mb-0'>Hello there!</h4>
                    <h3 className='text-white text-[2.5rem] font-clashdispla font-rubik  -mb-2 max-lg:text-[2rem] max-sm:text-[1.5rem]'>I'm Deepak Kumar</h3>
                    <h3 className='text-white text-[3rem] font-clashdispla font-rubik max-lg:text-[2.5rem] max-sm:text-[2rem]'>

                        <span className='text-[#4EB7DB gradient-text'>
                            <Typewriter
                                words={['MERN Developer', 'Graphic Designer']}
                                loop={-1}
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        <Cursor cursorColor='#4EB7DB' cursorStyle='|' />
                    </h3>
                    <p className='text-[#a0a0a0] text-[1.1rem] my-4 max-lg:my-2 max-lg:text-center max-lg:mx-6 max-sm:mx-2 max-sm:line-clamp-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et enim architecto fuga voluptatibus hic nobis assumenda dicta quibusdam aliquid inventore tempore, earum harum molestiae ex!</p>
                    <div>
                        <button className='gradient-btn my-4 max-lg:my-2'>
                            Download CV
                        </button>
                    </div>
                    <div className='flex  my-6 max-lg:my-4 max-lg:hidden '>
                        <FaLinkedinIn size={32} className='mx-3 text-white' />
                        <FaGithub size={32} className='mx-3 text-white' />
                        <FaInstagram size={32} className='mx-3 text-white' />
                        <FaTelegram size={32} className='mx-3 text-white' />
                        <FaDiscord size={32} className='mx-3 text-white' />
                    </div>

                </div>
                <div className='col-span-7 max-lg:col-span-12 flex items-end relative max-lg:pt-12 max-sm:justify-center'>
                    {/* Circle element */}
                    <img src={CircleElement} alt="Circle" className='circleImg w-[90%] max-sm:w-[100%]' />

                    {/* Profile image */}
                    <img src={ProfileImg} alt="" className="w-[70%] absolute mx-auto -bottom-[1rem] -left-[3rem] right-0 max-sm:left-0 max-sm:w-[80%]" />
                    <div className='absolute right-0 h-full max-lg:flex flex-col justify-center items-center hidden max-sm:hidden'>
                        <FaLinkedinIn size={32} className='my-3' />
                        <FaGithub size={32} className='my-3' />
                        <FaInstagram size={32} className='my-3' />
                        <FaTelegram size={32} className='my-3' />
                        <FaDiscord size={32} className='my-3' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection

const Container = styled.div`
    /* background: linear-gradient(to left, transparent,#131313, #131313);  */
    position: relative;
    overflow: hidden;
    background: url('../../assets/images/hero-bg.png');

    ::before{
        content: "";
    background-image: url('../../assets/images/hero-section-bg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 45rem;
    max-height: 60rem;
    height: 100vh;
    z-index: -1;
    }


    
    
`;