import React from 'react'
import Navbar from '../components/Navbar'

function RootLayout({ children }) {
    return (
        <div className=" bg-[#131313] min-h-screen">
            <div className=' bg-red00 h-auto max-w-screen-xl container mx-auto   '>
                <Navbar />
            </div>
                <div className='-mt-[5rem]'>
                    {children}
                </div>
        </div>
    )
}

export default RootLayout