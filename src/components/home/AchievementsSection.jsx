import React from 'react'
import AchievementsCard from '../AchievementsCard'
import AchievementsCard2 from '../AchievementsCard2'
import { useMediaQuery } from 'react-responsive'

const data = [
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
];

function AchievementsSection() {
    const islg = useMediaQuery({
        query: '(min-width: 1024px)'
    });


    return (
        <div className='relative bg-cover bg-center min-h-[50rem]  '>
            <div className='absolute inset-0'>
                <div className='min-h-screen grid grid-cols-12 gap-4 max-w-screen-xl container mx-auto relative '>
                    <div className='bg-[#AF1EAF] h-[20rem] w-[25rem] bg-opacity-75 rounded-full blur-[10rem] mt-[15rem] max-md:h-[15rem] max-md:w-[15rem] max-md:bg-opacity-100 max-md:blur-[5rem] max-md:mt-[15rem]'></div>
                    <div className='bg-[#370781] h-[20rem] w-[20rem] rounded-full blur-[8rem] mt-[25rem] max-md:h-[15rem] max-md:w-[15rem] max-md:blur-[5rem] max-md:mt-[25rem]'></div>
                    {/* <div className='bg-[#AF1EAF] h-[25rem] w-[25rem] bg-opacity-75 rounded-full blur-[8rem] mt-[-5rem] absolute right-[50%] me-[-12.5rem] max-md:h-[15rem] max-md:w-[15rem] max-md:bg-opacity-100 max-md:blur-[5rem] max-md:me-[-7.5rem]'></div> */}
                    <div className='bg-[#370781] h-[25rem] w-[25rem] rounded-full blur-[8rem] mt-[5rem] absolute right-0 max-md:h-[15rem] max-md:w-[15rem] max-md:blur-[5rem]'></div>
                </div>
            </div>
            <div className=' w-full overflow-hidden xl:max-w-screen-xl container mx-auto relative flex items-center  flex-col px-6'>
                <div className='flex flex-col items-center my-[2rem]'>
                    <h2 className='text-[2.5rem] heading max-sm:text-[2rem]'><span>Achievements</span></h2>
                    <div className='g-line'></div>
                </div>
                <div className='w-full'>
                    <div className='grid grid-cols-12 gap-6'>
                        {
                            data.map((data, index) => (
                                <>
                                    {
                                        index === 0 ?
                                            <>
                                                {
                                                    islg ?
                                                        <>
                                                            <div className='col-span-12 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12'>
                                                                <AchievementsCard />
                                                            </div>
                                                        </>
                                                        :
                                                        <>
                                                            <div className='col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12'>
                                                                <AchievementsCard2 />
                                                            </div>
                                                        </>
                                                }
                                            </> :
                                            <div className='col-span-3 max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12'>
                                                <AchievementsCard2 />
                                            </div>
                                    }
                                </>
                            ))
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AchievementsSection 