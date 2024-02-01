import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InforTab from './accountTab/InforTab'
import OrderTab from './accountTab/OrderTab'
import ChangePassTab from './accountTab/ChangePassTab'
import AddressTab from './accountTab/AddressTab'
import Alert from '../../components/popup/Alert'
const UserAccount = () => {
    const [tab, setTab] = useState(0)
    const [showPopup, setShowPopup] = useState(false)
    const userData = JSON.parse(localStorage.getItem('user'))
    const handleClickSignOut = () => {
        setShowPopup(!showPopup)
    }
    // =======tab component=======



    return (
        <div className='mt-16 p-24 text-white bg-repeat-x bg-fixed' >
            <div className='p-24'>
                <div className='p-24 grid grid-cols-5 gap-8 backdrop-blur-xl bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl'>
                    <div>
                        <h3 className='text-6xl mb-4'>Account</h3>
                        <p className='font-medium text-3xl mb-8'>Wellcome <span className='text-3xl'>{userData.fullName}</span> !</p>
                        <ul>
                            <li onClick={() => setTab(0)} className=' py-4 hover:underline text-2xl cursor-pointer capitalize border-y'>account information</li>
                            <li onClick={() => setTab(1)} className=' py-4 hover:underline text-2xl cursor-pointer capitalize border-b'>your orders</li>
                            <li onClick={() => setTab(2)} className=' py-4 hover:underline text-2xl cursor-pointer capitalize border-b'>change password</li>
                            <li onClick={handleClickSignOut} className='py-4 hover:underline text-2xl cursor-pointer capitalize border-b'>log out <i class="fa-solid fa-right-from-bracket"></i></li>
                        </ul>
                    </div>
                    <div className='col-span-4 col-start-2 p-24 bg-slate-50 rounded-3xl shadow-md text-black'>

                        <InforTab tab={tab} />
                        <OrderTab tab={tab} />
                        <ChangePassTab tab={tab} />
                        {/* <AddressTab tab={tab} /> */}
                    </div>
                </div>
            </div>
            {showPopup ?
                <Alert
                    title={'Đăng xuất'}
                    message={'Xác nhận đăng xuất'}
                    showOkBtn={true}
                    showCancelBtn={true}
                    okEven={() => {
                        localStorage.removeItem("user");
                        window.location.href = '/';
                    }}
                    cancelEven={() => {
                        setShowPopup(!showPopup)
                    }}
                /> : ""}

        </div>
    )
}

export default UserAccount