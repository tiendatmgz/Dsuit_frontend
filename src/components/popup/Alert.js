import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Alert = ({ title, message, showOkBtn, showCancelBtn, okEven, cancelEven }) => {
    const navigate = useNavigate()
    return (
        <div className='fixed  top-0 left-0'>
            <div div className='flex items-center justify-center top-0 h-screen w-screen bg-black z-50 bg-opacity-50' >
                <div className='relative w-1/4 h-64  bg-gradient-to-br from-sky-500 to-indigo-500 rounded-3xl'>
                    <p className='px-5 py-4 text-lg  font-bold border-b capitalize'>{title}</p>
                    <p className='px-5 py-4 '>{message}</p>
                    <div className='absolute py-4 bottom-0 uppercase w-full flex justify-evenly'>
                        <button
                            onClick={okEven}
                            className={`${showOkBtn ? '' : 'hidden'} relative bg-white text-black p-2 px-8 w-36  overflow-hidden border-black duration-500 hover:duration-500 hover:border-white  border-2 group/item before:absolute before:h-full  before:bg-blue-500 before:w-0 before:top-0 before:right-0 before:duration-500  hover:before:bg-indigo-500  hover:before:w-full hover:before:duration-500 hover:before:left-0`}>
                            <span className='relative z-10 uppercase duration-500 text-xl flex items-center justify-center gap-1 font-bold group-hover/item:text-white group-hover/item:duration-500 '>
                                ok
                            </span>
                        </button>
                        <button
                            onClick={cancelEven}
                            className={`${showCancelBtn ? '' : 'hidden'} relative bg-white text-black p-2 px-8 w-36  overflow-hidden border-black duration-500 hover:duration-500 hover:border-white  border-2 group/item before:absolute before:h-full  before:bg-blue-500 before:w-0 before:top-0 before:right-0 before:duration-500  hover:before:bg-indigo-500  hover:before:w-full hover:before:duration-500 hover:before:left-0`}>
                            <span className='relative z-10 uppercase duration-500 text-xl flex items-center justify-center gap-1 font-bold group-hover/item:text-white group-hover/item:duration-500 '>
                                cancel
                            </span>
                        </button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Alert