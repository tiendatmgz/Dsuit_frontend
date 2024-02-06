import React from 'react'
import { Link } from 'react-router-dom'

const Btn = ({ title, icon, to }) => {
    return (
        <Link to={to} className='relative  text-red-500 p-2 px-8  overflow-hidden border-red-500 duration-200 hover:duration-200 hover:border-white  border-2 group/item before:absolute before:h-full  before:bg-red-500 before:w-0 before:top-0 before:right-0 before:duration-200  hover:before:bg-red-500  hover:before:w-full hover:before:duration-200 hover:before:left-0 '>
            <span className='relative z-10 duration-200 text-xl flex items-center justify-center gap-1 font-bold group-hover/item:text-white group-hover/item:duration-200 '>
                {icon}
                {title}
            </span>
        </Link>
    )
}

export default Btn