import React from 'react'
import SkillImg from '../assets/images/c.png'
import Thumbnail from '../assets/images/project-thumb.png'

function ProjectCard({ title, index }) {
    return (
        <div className='glass grid grid-cols-12 gap-8 overflow-hidden w-full mx-auto rounded-[2rem] py-4 px-10 my-6 max-lg:px-4 max-lg:gap-4 max-lg:rounded-[1.5rem]'>
            {
                index % 2 === 0 &&
                <>
                    <div className='col-span-6 max-lg:col-span-12 max-lg:order-last'>
                        <h3 className='text-white text-[2rem] font-semibold'>{title}</h3>
                        <p className='text-[#b5b5b5] my-2 line-clamp-5 max-xl:line-clamp-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</p>
                        <h4 className='text-white text-[1.2rem]'>Technologies :</h4>
                        <div className='my-3 flex'>
                            <div className='h-[2.5rem] w-[2.5rem]  mx-1 '>
                                <img src={SkillImg} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='h-[2.5rem] w-[2.5rem] mx-1 '>
                                <img src={SkillImg} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='h-[2.5rem] w-[2.5rem] mx-1 '>
                                <img src={SkillImg} alt="" className='w-full h-full object-contain' />
                            </div>
                        </div>
                        <div>
                            <button className='gradient-btn my-4'>
                                Read more
                            </button>
                        </div>
                    </div>
                    <div className='col-span-6 flex items-center max-lg:col-span-12'>
                        <img src={Thumbnail} alt="" className='rounded-[2rem] max-lg:rounded-[1.5rem]' />
                    </div>
                </>
            }
            {
                index % 2 !== 0 &&
                <>
                    <div className='col-span-6 flex items-center max-lg:col-span-12'>
                        <img src={Thumbnail} alt="" className='rounded-[2rem] max-lg:rounded-[1.5rem]' />
                    </div>
                    <div className='col-span-6 max-lg:col-span-12'>
                        <h3 className='text-white text-[2rem] font-semibold'>{title}</h3>
                        <p className='text-[#b5b5b5] my-2 line-clamp-5 max-xl:line-clamp-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</p>
                        <h4 className='text-white text-[1.2rem]'>Technologies :</h4>
                        <div className='my-3 flex'>
                            <div className='h-[2.5rem] w-[2.5rem]  mx-1 '>
                                <img src={SkillImg} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='h-[2.5rem] w-[2.5rem] mx-1 '>
                                <img src={SkillImg} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='h-[2.5rem] w-[2.5rem] mx-1 '>
                                <img src={SkillImg} alt="" className='w-full h-full object-contain' />
                            </div>
                        </div>
                        <div>
                            <button className='gradient-btn my-4'>
                                Read more
                            </button>
                        </div>
                    </div>

                </>
            }

        </div>
    )
}

export default ProjectCard