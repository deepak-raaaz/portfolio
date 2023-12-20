import React from 'react'
import DateIcon from '../assets/images/date-icon.png'
import Thumbnail from '../assets/images/project-thumb.png'

function AchievementsCard({ title, index }) {
    return (
        <div className='glass grid grid-cols-12 gap-8 overflow-hidden w-full mx-auto rounded-[2rem] py-4 px-10 my-6'>
            
            {
                index % 2 !== 0 &&
                <>
                    <div className='col-span-6 flex items-center'>
                        <img src={Thumbnail} alt="" className='rounded-[2rem]' />
                    </div>
                    <div className='col-span-6'>
                        <div className='flex'>
                            <img src={DateIcon} alt="" />
                            <span className='ms-2 text-[#b5b5b5] '>Oct 16th 2023</span>
                        </div>
                        <h3 className='text-white text-[2rem] font-semibold'>Title oaf asjfsajf</h3>
                        <p className='text-[#b5b5b5] my-2 line-clamp-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</p>
                      
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

export default AchievementsCard