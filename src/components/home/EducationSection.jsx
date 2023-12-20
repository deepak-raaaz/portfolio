import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '../../assets/images/school-icon.png'
import SchoolIcon2 from '../../assets/images/School-icon-2.png'
import SchoolIcon3 from '../../assets/images/School-icon-3.png'
import { useMediaQuery } from 'react-responsive';

const icon = [SchoolIcon, SchoolIcon2, SchoolIcon3];
const educationdata = [
    {
        date: '2009 - 2019',
        title: 'Oxford Public School',
        sub_title: 'Middle School, CBSE, Class  I to X'
    },
    {
        date: 'May 2019 - May 2021',
        title: '+2 D.S.S. SR. Sec. School',
        sub_title: 'High School, BSEB, Class  XI to XII'
    },
    {
        date: 'Sep 2022 - Jul 2026',
        title: 'Haldia Institute of Technology',
        sub_title: 'Bachelor of Technology - BTech in Computer Science and Engineering with specialization in Data Science'
    },
];

function EducationSection() {
    const islg = useMediaQuery({
        query: '(max-width: 1024px)'
    })


    return (
        <div className='relative bg-cover bg-center   '>
            <div className='absolute inset-0'>
                <div className='min-h-screen grid grid-cols-12 gap-4 max-w-screen-xl container mx-auto relative '>
                    <div className='bg-[#AF1EAF] h-[20rem] w-[25rem] bg-opacity-75 rounded-full blur-[10rem] mt-[15rem] max-md:h-[15rem] max-md:w-[15rem] max-md:bg-opacity-100 max-md:blur-[5rem] max-md:mt-[15rem] max-sm:absolute max-sm:right-0'></div>
                    <div className='bg-[#370781] h-[20rem] w-[20rem] rounded-full blur-[8rem] mt-[25rem] max-md:h-[15rem] max-md:w-[15rem] max-md:blur-[5rem] max-md:mt-[25rem] max-sm:hidden'></div>
                    {/* <div className='bg-[#AF1EAF] h-[25rem] w-[25rem] bg-opacity-75 rounded-full blur-[8rem] mt-[-5rem] absolute right-[50%] me-[-12.5rem] max-md:h-[15rem] max-md:w-[15rem] max-md:bg-opacity-100 max-md:blur-[5rem] max-md:me-[-7.5rem]'></div> */}
                    <div className='bg-[#370781] h-[25rem] w-[25rem] rounded-full blur-[8rem] mt-[5rem] absolute right-0 max-md:h-[15rem] max-md:w-[15rem] max-md:blur-[5rem] max-sm:hidden'></div>
                </div>
            </div>
            <div className=' w-full overflow-hidden xl:max-w-screen-xl container mx-auto relative flex items-center  flex-col '>
                <div className='flex flex-col items-center my-[2rem]'>
                    <h2 className='text-[2.5rem] heading max-sm:text-[2rem]'><span>Education</span></h2>
                    <div className='g-line'></div>
                </div>
                <div className='w-[90%] mb-10 max-sm:w-[100%]'>
                    <Timeline position={islg ? "" : "alternate"} 
                        sx={ islg && {
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                            },
                        }}
                        >
                        {
                            educationdata.map((data, index) => (
                                <TimelineItem>
                                    <TimelineSeparator  >
                                        <TimelineConnector sx={{ bgcolor: '#370781' }} />
                                        <TimelineDot className='w-[6rem] h-[6rem] bg-transparent shadow-none max-sm:w-[4rem] max-sm:h-[4rem]'>
                                            <img
                                                src={icon[index] || icon[2]} // Replace with the URL of your image
                                                alt="Custom Timeline Dot"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                                            />
                                        </TimelineDot>
                                        <TimelineConnector sx={{ bgcolor: '#370781' }} />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>

                                        <div className='glass px-6 py-4 rounded-[1rem] min-h-[10rem] max-sm:px-4'>
                                            <span className='gradient-text'>{data.date}</span>
                                            <h4 className='text-[1.5rem] font-semibold text-white max-sm:text-[1.2rem]'>{data.title}</h4>
                                            <p className='text-[#989999]'>{data.sub_title}</p>
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>
                            ))
                        }
                    </Timeline>
                </div>



            </div>
        </div>
    )
}

export default EducationSection