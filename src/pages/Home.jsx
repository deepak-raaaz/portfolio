import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import SkillsSection from '../components/home/SkillsSection'
import ProjectSection from '../components/home/ProjectSection'
import EducationSection from '../components/home/EducationSection'
import AchievementsSection from '../components/home/AchievementsSection'
import MediaProfilesSection from '../components/home/MediaProfilesSection'
import ContactSection from '../components/home/ContactSection'

function Home() {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <EducationSection/>
            <AchievementsSection/>
            <MediaProfilesSection/>
            <ContactSection/>
        </>
    )
}

export default Home