import React from 'react'
import AboutImg from '../../assets/images/about-section-img.jpg'
import DotElement from '../../assets/images/about-dot-element.svg'
import WebImg from '../../assets/images/web-dev-icon.png'
import GraphicImg from '../../assets/images/gd-icon.png'

import { Divider } from '@mui/material'

function AboutSection() {
    return (
        <div className=' relative bg-cover bg-center min-h-[45rem] max-h-[60rem] h-[100vh] max-lg:h-auto'>
            {/* Gradient Background  */}
            <div className='absolute inset-0'>
                <div className='min-h-screen grid grid-cols-12 gap-4 max-w-screen-xl container mx-auto relative'>
                    <div className='bg-[#AF1EAF] h-[20rem] w-[25rem] bg-opacity-75 rounded-full blur-[10rem] mt-[15rem] max-md:h-[10rem] max-md:w-[10rem] max-md:mt-[30rem] max-md:blur-[4rem] max-md:bg-opacity-100 max-sm:h-[7rem] max-sm:w-[7rem] max-sm:mt-[20rem]'></div>
                    <div className='bg-[#370781] h-[20rem] w-[20rem] rounded-full blur-[8rem] mt-[25rem] max-md:h-[10rem] max-md:w-[10rem] max-md:mt-[12.5rem] max-sm:h-[7rem] max-sm:w-[7rem] max-sm:mt-[10rem]'></div>
                    <div className='bg-[#370781] h-[25rem] w-[25rem] rounded-full blur-[8rem] mt-[5rem] absolute right-0 max-md:h-[12.5rem] max-md:w-[12.5rem] max-md:mt-[2.5rem] max-sm:h-[8.5rem] max-sm:w-[8.5rem] max-sm:mt-[2rem]'></div>
                </div>
            </div>
            <div className='h-[100%] grid grid-cols-12 gap-10 overflow-hidden xl:max-w-screen-xl container mx-auto relative max-lg:py-12 px-6 max-lg:gap-4 '>
                <div className='col-span-6 flex justify-center items-center max-lg:col-span-12 '>
                    <div className='relative max-lg:w-[100%] max-lg:mb-[2rem] '>
                        <div className='rounded-[2rem] overflow-hidden aspect-[3/2] w-full max-sm:rounded-[1rem] '>
                            <img src={AboutImg} alt="" />
                        </div>
                        <div className='glass blur-0 h-[13rem] w-[13rem] rounded-b-[1rem] absolute -bottom-16 right-0 max-sm:h-[8rem] max-sm:w-[8rem] max-sm:-bottom-12'>
                            <div className='relative flex flex-col items-center justify-center h-full w-full'>
                                <img src={DotElement} alt="" className='h-[11rem] absolute top-[1.5rem] left-[2.5rem] max-sm:h-[6rem] max-sm:left-[1rem] max-sm:top-[1rem]' />
                                <div className='flex ms-6 -mb-4'>
                                    <p className='text-[4rem] text-white font-bold max-sm:text-[3rem]'>2 </p><p className='text-[1.5rem] mt-4 ms-1 text-white font-bold max-sm:text-[1rem]'>nd</p>
                                </div>
                                <p className='text-[1.5rem] text-white font-semibold uppercase text-center max-sm:text-[1rem] max-sm:mx-1'>Year Student of HIT</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-6 flex justify-center flex-col  max-lg:col-span-12'>
                    <div>
                        <h2 className='text-[2.5rem] heading max-sm:text-[2rem]'>About <span>me</span></h2>
                        <div className='g-line'></div>
                    </div>
                    <p className='text-[#989999] my-4 line-clamp-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</p>
                    <Divider className='my-4 bg-[#4f4f4f]' />
                    <div>
                        <div className='flex items-center my-3'>
                            <img src={WebImg} alt="" />
                            <span className='text-[#989999] ms-4'>Web Developer</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <img src={GraphicImg} alt="" />
                            <span className='text-[#989999] ms-4'>Graphic Designer</span>
                        </div>
                    </div>
                    <div>
                        <button className='gradient-btn my-4'>
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection