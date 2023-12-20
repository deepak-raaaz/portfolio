import React from 'react'
import MediaProfileCard from '../MediaProfileCard'
import { Divider, TextField } from '@mui/material'



function ContactSection() {


    return (
        <div className='relative bg-cover bg-center min-h-[45rem] max-h-[60rem] h-[100vh] '>
            <div className='absolute inset-0'>
                <div className='min-h-screen grid grid-cols-12 gap-4 max-w-screen-xl container mx-auto relative '>
                    <div className='bg-[#AF1EAF] h-[20rem] w-[25rem] bg-opacity-75 rounded-full blur-[10rem] mt-[15rem] max-md:h-[15rem] max-md:w-[15rem] max-md:bg-opacity-100 max-md:blur-[5rem] max-md:mt-[15rem]'></div>
                    <div className='bg-[#370781] h-[20rem] w-[20rem] rounded-full blur-[8rem] mt-[25rem] max-md:h-[15rem] max-md:w-[15rem] max-md:blur-[5rem] max-md:mt-[25rem]'></div>
                    {/* <div className='bg-[#AF1EAF] h-[25rem] w-[25rem] bg-opacity-75 rounded-full blur-[8rem] mt-[-5rem] absolute right-[50%] me-[-12.5rem] max-md:h-[15rem] max-md:w-[15rem] max-md:bg-opacity-100 max-md:blur-[5rem] max-md:me-[-7.5rem]'></div> */}
                    <div className='bg-[#370781] h-[25rem] w-[25rem] rounded-full blur-[8rem] mt-[5rem] absolute right-0 max-md:h-[15rem] max-md:w-[15rem] max-md:blur-[5rem]'></div>
                </div>
            </div>
            <div className='glass h-[10rem] w-full py-4 absolute bottom-0 rounded-t-[5rem] flex justify-center items-end max-sm:rounded-t-[2rem]'>
                <p className='text-[#989999] text-center mx-6'>© Copyright 2023 All Rights Reserved |  Designed and build by <span className='text-[#4EB7DB]'>Deepak</span></p>
            </div>
            <div className=' w-full h-full overflow-hidden xl:max-w-screen-xl container mx-auto relative flex items-center  flex-col px-6'>
                <div className='flex flex-col items-center my-[2rem]'>
                    <h2 className='text-[2.5rem] heading max-sm:text-[2rem]'><span>Contact</span></h2>
                    <div className='g-line'></div>
                </div>
                <div className='glass w-full h-full mb-[5.5rem] rounded-[2rem] grid grid-cols-12 gap-2'>
                    <div className='col-span-6 py-6 px-10 max-xl:col-span-5 max-lg:col-span-12 max-sm:py-0 max-sm:mt-4 max-sm:flex max-sm:justify-center max-sm:items-center'>
                        <h3 className='text-[2.5rem] heading max-sm:text-[1.5rem] max-sm:text-center'>Let’s discuss on<br />something <span>cool</span> together</h3>
                    </div>
                    <div className='col-span-6 py-8 px-10 max-xl:col-span-7 max-lg:col-span-12 max-md:px-4 max-sm:py-0 max-sm:mb-4'>
                        <div className='glass2 w-full h-full rounded-[2rem] overflow-hidden px-16 py-8 flex items-center justify-center max-sm:px-6'>
                            <form action="" className='w-full'>
                                <input type="text" name="name" id="name" placeholder='Name' className='w-full bg-transparent border-none focus:outline-none text-white' />
                                <Divider className='bg-[#ffffff43] mt-2 mb-10 max-sm:mb-5' />
                                <input type="email" name="email" id="email" placeholder='Email' className='w-full bg-transparent border-none focus:outline-none text-white' />
                                <Divider className='bg-[#ffffff43] mt-2 mb-10 max-sm:mb-5' />
                                <textarea
                                    id="myTextarea"
                                    rows={4}
                                    className="w-full resize-none bg-transparent border-none focus:outline-none text-white"
                                    placeholder="Message..."

                                ></textarea>
                                <Divider className='bg-[#ffffff43] mt-2 mb-10 max-sm:mb-5' />
                                <div className='w-full flex'>
                                    <button className='gradient-btn my-4 mx-auto max-sm:my-0'>
                                        Submit message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ContactSection 