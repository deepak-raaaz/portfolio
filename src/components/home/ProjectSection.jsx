import React, { useEffect } from 'react'
import ProjectCard from '../ProjectCard'
import { Box, Fade, Tab, Tabs } from '@mui/material';
import { useStateProvider } from '../../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../../utils/constants';

const TabPanel = ({ children, value, index, ...other }) => (
    <Fade in={value === index} timeout={500}>
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <>{children}</>}
        </div>
    </Fade>
);


function ProjectSection() {
    const api_url = process.env.REACT_APP_API_LINK;
    const [projects, dispatch] = useStateProvider();

    const categories = Array.from(new Set(projects.projects.map((project) => project.category)));
    console.log(categories);

    useEffect(() => {
        const getProjects = async () => {
            await axios.get(`${api_url}projects`)
                .then(response => {
                    console.log(response);
                    const projects = response.data.map((items) => {
                        return {
                            id: items._id,
                            title: items.title,
                            slug: items.slug,
                            thumbnail_url: items.thumbnail_url,
                            category: items.category,
                            short_description: items.short_description,
                            description: items.description,
                            github_link: items.github_link,
                            live_preview_link: items.live_preview_link,
                            views: items.views,
                            likes: items.likes,
                            date_posted: items.date_posted,
                            technologies: items.technologies.map((list) => {
                                return {
                                    id: list._id,
                                    name: list.name,
                                    image_url: list.image_url
                                }
                            }),
                            tags: items.tags

                        }
                    });
                    dispatch({ type: reducerCases.SET_PROJECTS, projects });
                })
                .catch(error => {
                    console.log(error);
                })

        }
        getProjects();
    }, [dispatch]);
    console.log(projects.projects);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='relative bg-cover bg-center min-h-[50rem]  '>
            <div className='absolute inset-0 '>
                <div className='min-h-screen grid grid-cols-12 gap-4 max-w-screen-xl container mx-auto relative '>
                    <div className='bg-[#AF1EAF] h-[20rem] w-[25rem] bg-opacity-75 rounded-full blur-[10rem] mt-[15rem] max-md:h-[15rem] max-md:w-[15rem] max-md:bg-opacity-100 max-md:blur-[5rem] max-md:mt-[15rem]'></div>
                    <div className='bg-[#370781] h-[20rem] w-[20rem] rounded-full blur-[8rem] mt-[25rem] max-md:h-[15rem] max-md:w-[15rem] max-md:blur-[5rem] max-md:mt-[25rem]'></div>
                    {/* <div className='bg-[#AF1EAF] h-[25rem] w-[25rem] bg-opacity-75 rounded-full blur-[8rem] mt-[-5rem] absolute right-[50%] me-[-12.5rem] max-md:h-[15rem] max-md:w-[15rem] max-md:bg-opacity-100 max-md:blur-[5rem] max-md:me-[-7.5rem]'></div> */}
                    <div className='bg-[#370781] h-[25rem] w-[25rem] rounded-full blur-[8rem] mt-[5rem] absolute right-0 max-md:h-[15rem] max-md:w-[15rem] max-md:blur-[5rem]'></div>
                </div>
            </div>
            <div className=' w-full overflow-hidden xl:max-w-screen-xl container mx-auto relative flex items-center  flex-col px-6 '>
                <div className='flex flex-col items-center my-[2rem]'>
                    <h2 className='text-[2.5rem] heading max-sm:text-[2rem]'>My <span>Projects</span></h2>
                    <div className='g-line'></div>
                </div>
                <div className='mb-6 max-sm:mx-8'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        className='glass rounded-full'
                        TabIndicatorProps={{
                            style: {
                                display: 'none',
                                background: 'green', // Change the background color of the active tab indicator to green
                            },
                        }}
                    >
                        {
                            categories.map((items, index) => (
                                <Tab
                                    label={items}
                                    style={{
                                        borderRadius: '10rem',
                                        paddingLeft: '2rem',
                                        paddingRight: '2rem',
                                        textTransform: 'none',
                                        fontWeight: '500',
                                        fontSize: '1rem',
                                        background: value === index ? ' linear-gradient(to right, #AF1EAF, #4EB7DB)' : '',
                                        color: 'white',
                                    }}
                                />
                            ))
                        }

                        {/* <li class="nav-item" role="presentation">
                            <button class={`nav-link ${index === 0 ? 'active tab-btn' : ''}`} id={`pills-${items}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${items}`} type="button" role="tab" aria-controls={`pills-${items}`} aria-selected={`${index === 0 ? 'true' : 'false'}`}>{items}</button>
                        </li> */}

                    </Tabs>
                </div>
                <div className='w-full'>
                    {
                        categories.map((category, index) => (
                            <>
                            <TabPanel value={value} index={index}>
                                
                                    {
                                        projects.projects.filter((project) => project.category === category).map((project, index) => (
                                            <ProjectCard title={project.title} index={index} />
                                        ))
                                    }


                                
                                </TabPanel>
                            </>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}

export default ProjectSection 