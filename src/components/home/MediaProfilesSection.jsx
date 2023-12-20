import React from 'react'
import AchievementsCard from '../AchievementsCard'
import AchievementsCard2 from '../AchievementsCard2'
import MediaProfileCard from '../MediaProfileCard'

const social_data = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
]


function MediaProfilesSection() {


    return (
        <div className='relative bg-cover bg-center min-h-[20rem] h-auto  '>
            <div className='absolute inset-0'>
                <div className='min-h-screen grid grid-cols-12 gap-4 max-w-screen-xl container mx-auto relative '>
                    <div className='bg-[#AF1EAF] h-[20rem] w-[25rem] bg-opacity-75 rounded-full blur-[10rem] mt-[15rem] max-md:h-[15rem] max-md:w-[15rem] max-md:bg-opacity-100 max-md:blur-[5rem] max-md:mt-[15rem]'></div>
                    <div className='bg-[#370781] h-[20rem] w-[20rem] rounded-full blur-[8rem] mt-[25rem] max-md:h-[15rem] max-md:w-[15rem] max-md:blur-[5rem] max-md:mt-[25rem]'></div>
                    {/* <div className='bg-[#AF1EAF] h-[25rem] w-[25rem] bg-opacity-75 rounded-full blur-[8rem] mt-[-5rem] absolute right-[50%] me-[-12.5rem] max-md:h-[15rem] max-md:w-[15rem] max-md:bg-opacity-100 max-md:blur-[5rem] max-md:me-[-7.5rem]'></div> */}
                    <div className='bg-[#370781] h-[25rem] w-[25rem] rounded-full blur-[8rem] mt-[5rem] absolute right-0 max-md:h-[15rem] max-md:w-[15rem] max-md:blur-[5rem]'></div>
                </div>
            </div>
            <div className=' w-full overflow-hidden xl:max-w-screen-xl container mx-auto relative flex items-center  flex-col px-6'>
                <div className='flex flex-col items-center my-[4rem]'>
                    <h2 className='text-[2.5rem] heading max-sm:text-[2rem]'>Media <span>Profiles</span></h2>
                    <div className='g-line'></div>
                </div>
                <div className='w-full grid grid-cols-12 gap-6 mb-6'>
                    {
                        social_data.map((data) => (
                            <div className='col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 mt-6'>
                                <MediaProfileCard />
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}

export default MediaProfilesSection 