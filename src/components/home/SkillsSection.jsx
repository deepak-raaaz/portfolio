import React, { useEffect } from 'react'
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/constants';
import axios from 'axios';

function SkillsSection() {
    const api_url = process.env.REACT_APP_API_LINK;
    const [skills, dispatch] = useStateProvider();

    useEffect(() => {
        const getSkills = async () => {
            await axios.get(`${api_url}skills`)
                .then(response => {
                    const skills = response.data.map((items) => {
                        return {
                            id: items._id,
                            name: items.name,
                            image_url: items.image_url,
                            category: items.category

                        }
                    });
                    dispatch({ type: reducerCases.SET_SKILLS, skills });
                })
                .catch(error => {
                    console.log(error);
                })

        }
        getSkills();
    }, [dispatch]);


    return (
        <div className='relative bg-cover bg-center min-h-[45rem] h-[100vh] flex items-center justify-center max-sm:h-auto '>
            <div className='absolute inset-0'>
                <div className='min-h-screen grid grid-cols-12 gap-4 max-w-screen-xl container mx-auto relative '>
                    <div className='bg-[#AF1EAF] h-[20rem] w-[25rem] bg-opacity-75 rounded-full blur-[10rem] mt-[15rem] max-md:h-[10rem] max-md:w-[10rem] max-md:mt-[10rem] max-sm:h-[7rem] max-sm:w-[7rem] max-sm:mt-[8rem]'></div>
                    <div className='bg-[#370781] h-[20rem] w-[20rem] rounded-full blur-[8rem] mt-[25rem] max-md:h-[10rem] max-md:w-[10rem] max-md:mt-[12.5rem] max-md:blur-[5rem] max-sm:h-[7rem] max-sm:w-[7rem] max-sm:mt-[10rem]'></div>
                    <div className='bg-[#AF1EAF] h-[25rem] w-[25rem] bg-opacity-75 rounded-full blur-[8rem] mt-[-5rem] absolute right-[35%] max-md:h-[15rem] max-md:w-[15rem] max-md:mt-[-3rem] max-md:right-[30%] max-md:bg-opacity-100 max-md:blur-[5rem] max-sm:h-[15rem] max-sm:w-[15rem] max-sm:mt-[-2rem] max-sm:right-[50%] max-sm:me-[-7.5rem] max-sm:blur-[4rem]'></div>
                    <div className='bg-[#370781] h-[25rem] w-[25rem] rounded-full blur-[8rem] mt-[5rem] absolute right-0 max-md:h-[15rem] max-md:w-[15rem] max-md:blur-[5rem] max-md:mt-[10rem]'></div>
                </div>
            </div>
            <div className='h-[100%] overflow-hidden xl:max-w-screen-xl container mx-auto relative flex items-center justify-center px-6 '>
                <div className='w-full glass rounded-[2rem] overflow-hidden  mx-auto px-[5rem] py-[3rem] max-md:px-[2rem] max-sm:py-[2rem] max-sm:px-4'>
                    <div className='flex flex-col items-center mb-[4rem]'>
                        <h2 className='text-[2.5rem] heading max-sm:text-[2rem]'>My <span>Skills & Tools</span></h2>
                        <div className='g-line'></div>
                    </div>
                    <div className=' grid grid-cols-12 gap-8 overflow-hidden  mx-auto max-md:gap-4 '>
                        {
                            skills.skills.length > 0 && skills.skills.map((items) => (
                                <div className=' glass rounded-[1rem] overflow-hidden col-span-2 px-4 py-4 flex justify-center items-center flex-col max-lg:col-span-3  max-sm:col-span-4'>
                                    <img src={items.image_url} alt="" className='w-[4rem] h-[4rem] object-contain max-sm:w-[3rem] max-sm:h-[3rem]' />
                                    <span className='text-white my-2 text-center'>{items.name}</span>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection