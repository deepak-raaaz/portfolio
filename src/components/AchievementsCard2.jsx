import React from 'react'
import DateIcon from '../assets/images/date-icon.png'
import Thumbnail from '../assets/images/project-thumb.png'

function AchievementsCard2({ title, index }) {
    return (
        <div className='glass flex flex-col overflow-hidden w-full mx-auto rounded-[1.5rem] py-4 px-4 '>
            
            {
                index % 2 !== 0 &&
                <>
                    <div className='flex items-center'>
                        <img src={Thumbnail} alt="" className='rounded-[1.5rem]' />
                    </div>
                    <div className='mt-4'>
                        <div className='flex mb-2'>
                            <img src={DateIcon} alt="" />
                            <span className='ms-2 text-[#b5b5b5] '>Oct 16th 2023</span>
                        </div>
                        <h3 className='text-white text-[1.5rem] font-semibold'>Title oaf asjfsajf</h3>
                        <p className='text-[#b5b5b5] my-1 line-clamp-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</p>
                      
                        <div>
                            <button className='gradient-btn my-2'>
                                Read more
                            </button>
                        </div>
                    </div>

                </>
            }

        </div>
    )
}

export default AchievementsCard2