import React from 'react'

const AddressTab = ({ tab }) => {
    return (
        <>
            <div className={`${tab === 3 ? '' : 'hidden'} col-span-4 col-start-2`}>
                <h3 className='text-xl mb-8'>Địa chỉ của bạn</h3>
                <div
                    // onClick={handleClickResetPassword}
                    className='w-36 cursor-pointer text-center p-2 hover:bg-indigo-500 hover:duration-200 duration-200 border-2 border-black capitalize'>
                    thêm địa chỉ +
                </div>
                <div className=' bg-black bg-opacity-20'>
                    qưeqwe
                </div>
            </div>
        </>
    )
}

export default AddressTab