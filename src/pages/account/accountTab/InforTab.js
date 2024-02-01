import React from 'react'

const InforTab = ({tab}) => {
  const userData = JSON.parse(localStorage.getItem('user'))

  return (
    <div className={`${tab === 0 ? '' : 'hidden'}`}>
      <h3 className='text-2xl mb-8 capitalize'>account information</h3>
      <div className='flex flex-col gap-4'>
        <p><span className='font-medium'>Full Name:</span> {userData.fullName}</p>
        <p><span className='font-medium'>Email:</span> {userData.email}</p>
        <p><span className='font-medium'>Phone:</span> {userData.phoneNum}</p>
        <p>{userData.address ? (<span className='font-medium'>Address: <span>{userData.address}</span></span>) : ''}</p>
      </div>
    </div>
  )
}

export default InforTab