import React from 'react'

const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center py-36'>
            <div className="lds-grid grid-cols-3 grid gap-7">
                <div className='bg-red-500'></div>
                <div className='bg-red-500'></div>
                <div className='bg-red-500'></div>
                <div className='bg-red-500'></div>
                <div className='bg-red-500'></div>
                <div className='bg-red-500'></div>
                <div className='bg-red-500'></div>
                <div className='bg-red-500'></div>
                <div className='bg-red-500'></div>
            </div>
        </div>
    )
}

export default Loading