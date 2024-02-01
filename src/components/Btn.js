import React from 'react'
import { Link } from 'react-router-dom'

const Btn = ({ title, icon, to }) => {
    return (
        <Link to={to} className='relative bg-white text-black p-4 px-8 rounded-full overflow-hidden border-black duration-500 hover:duration-500 hover:border-white  border-2 group/item before:absolute before:h-full  before:bg-blue-500 before:w-0 before:top-0 before:right-0 before:duration-500  hover:before:bg-indigo-500  hover:before:w-full hover:before:duration-500 hover:before:left-0 '>
            <span className='relative z-10 duration-500 text-xl flex items-center justify-center gap-1 font-bold group-hover/item:text-white group-hover/item:duration-500 '>
                {icon}
                {title}
            </span>
        </Link>
    )
}

export default Btn