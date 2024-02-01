import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'
// import ScrollAnimation from 'react-animate-on-scroll'
// import ScrollAnimation from 'react-animate-on-scroll';
const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='mt-16 p-24 flex flex-col justify-center text-white items-center gap-8 bg-gradient-to-r from-sky-500 to-indigo-500'>
            <h1 className='text-9xl font-extrabold border-b-2 '>404</h1>
            <p>This page could not be found.</p>
            
            <Btn to={'/'} title={'Home Page'} icon={<i className="group-hover/item:-translate-x-2 fa-solid fa-arrow-left"></i>}/>
            {/* <h1 className='animate__animated animate__slideInLeft opacity-100'>An animated element</h1>  */}

        </div>
    )
}

export default NotFound