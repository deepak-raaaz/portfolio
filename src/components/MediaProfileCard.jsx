import React from 'react'
import LinkedIn from '../assets/images/linkedin.png'
import GlassLinkedIn from '../assets/images/glass-linkedin.png'

function MediaProfileCard({ title, index }) {
    return (
        <div className='glass flex flex-col overflow-hidde w-full mx-auto rounded-[1.5rem] py-4 px-4 relative '>
            <div className='glass_xl  flex items-center h-[4rem] w-[4rem] justify-center rounded-full overflow-hidden -mt-[3rem] ms-2 '>
                <img src={LinkedIn} alt="" className='h-[2rem] w-[2rem] object-contain' />
            </div>
            <div className='mt-2'>
                <h3 className='text-white text-[1.2rem] font-semibold'>LinkedIn</h3>
                <p className='text-[#b5b5b5] my-1 line-clamp-3'>Instagram/deepak_raaz</p>
                
            </div>
        </div>
    )
}

export default MediaProfileCard