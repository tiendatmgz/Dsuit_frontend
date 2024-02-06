
import React from 'react'

const DotGroup = () => {
    return (
        <div className='grid grid-cols-3 gap-8'>
            <div className='w-5 h-5 bg-red-500 hover:rotate-180 hover:duration-500 duration-500'></div>
            <div className='w-5 h-5 bg-red-500 hover:rotate-180 hover:duration-500 duration-500'></div>
            <div className='w-5 h-5 bg-red-500 hover:rotate-180 hover:duration-500 duration-500'></div>
            <div className='w-5 h-5 bg-red-500 hover:rotate-180 hover:duration-500 duration-500'></div>
            <div className='w-5 h-5 bg-red-500 hover:rotate-180 hover:duration-500 duration-500'></div>
            <div className='w-5 h-5 bg-red-500 hover:rotate-180 hover:duration-500 duration-500'></div>
            <div className='w-5 h-5 bg-red-500 hover:rotate-180 hover:duration-500 duration-500'></div>
            <div className='w-5 h-5 bg-red-500 hover:rotate-180 hover:duration-500 duration-500'></div>
            <div className='w-5 h-5 bg-red-500 hover:rotate-180 hover:duration-500 duration-500'></div>
        </div>
    )
}
const CicleGroup = () => {
    return (
        <div className='w-96 h-96 flex  bg-red-500  rounded-full overflow-hidden relative'>
            <div className='w-96 h-96 flex  bg-red-600 rounded-full absolute top-0 -left-16 '></div>
            <div className='w-72 h-72 flex  bg-red-700 rounded-full absolute bottom-0 left-'></div>
        </div>
    )
}

export { DotGroup, CicleGroup }