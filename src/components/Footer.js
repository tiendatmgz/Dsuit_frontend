import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='text-white'>

            <div className=' flex  justify-center w-full bg-gradient-to-r from-sky-500 to-indigo-500'>
                <ul className='flex w-2/3 justify-around border-b border-white py-12' >
                    <li className='flex gap-2 justify-center items-center'><i className=" fa-solid fa-lock fa-lg"></i><span className=' text-lg'>Secure Payment</span></li>
                    <li className='flex gap-2 justify-center items-center'><i className=" fa-solid fa-truck fa-lg"></i><span className=' text-lg'>Express Shipping</span></li>
                    <li className='flex gap-2 justify-center items-center'><i className=" fa-solid fa-right-left fa-lg"></i><span className=' text-lg'>Free Return</span></li>
                </ul>
            </div>
            <div className=' flex justify-center pt-24 pb-16 w-full bg-gradient-to-r from-sky-500 to-indigo-500  '>
                <div className='grid grid-cols-4 gap-16 w-2/3'>
                    <div className='flex flex-col gap-10'>
                        <h2 className='text-2xl  border-b-2 border-amber-400'>D-SUIT</h2>
                        <p className=''>Stay up to date with the latest trends and promotions by following us on social media. Join the D-SUIT community today.</p>
                        <div className='flex justify-start gap-8 text-2xl'>
                            <a href=''><i className="text-xl fa-brands fa-facebook"></i></a>
                            <a href=''><i className="text-xl fa-brands fa-instagram"></i></a>
                            <a href=''><i className="text-xl fa-brands fa-linkedin"></i></a>
                            <a href=''><i className="text-xl fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h2 className='text-2xl  border-b-2 border-amber-400'>Shop</h2>
                        <ul className='flex flex-col'>
                            <li><Link to='/all' className=' hover:underline'>Shop</Link></li>
                            <li><Link to='/men' className=' hover:underline'>Men</Link></li>
                            <li><Link to='/women' className=' hover:underline'>Women</Link></li>
                            <li><Link to='/accessory' className=' hover:underline'>Accessories</Link></li>
                            <li><Link to='/new-arrival' className=' hover:underline'>New Arrivals</Link></li>

                        </ul>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h2 className='text-2xl  border-b-2 border-amber-400'>About</h2>
                        <ul className='flex flex-col'>
                            <li><Link to='/' className=' hover:underline'>Home</Link></li>
                            <li><Link to='/contact' className=' hover:underline'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h2 className='text-2xl  border-b-2 border-amber-400'>Need Help?</h2>
                        <ul>
                            <li><Link to='/my-account' className=' hover:underline'>Account</Link></li>
                            <li><Link to='/cart' className=' hover:underline'>Cart</Link></li>
                            <li><Link to='/' className=' hover:underline'>Checkout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='px-24 py-10 flex items-center bg-gradient-to-r from-sky-500 to-indigo-500 '>
                <p className='text-center w-1/2 font-medium'><i className="text-xl fa-solid fa-phone-volume"></i> HOTLINE: <a href='#' >0967.454.932</a></p>
                <p className='text-center w-1/2 font-medium'><i className="text-xl fa-solid fa-envelope"></i> SEND MAIL: <a href='#' >tiendatyenbai2001@gmail.com</a></p>
            </div>
            <div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '22px', marginTop: '1px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '21px', marginTop: '2px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '20px', marginTop: '3px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '19px', marginTop: '4px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '18px', marginTop: '5px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '17px', marginTop: '6px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '16px', marginTop: '7px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '15px', marginTop: '8px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '14px', marginTop: '9px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '13px', marginTop: '10px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '12px', marginTop: '11px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '11px', marginTop: '12px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '10px', marginTop: '13px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '9px', marginTop: '14px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '8px', marginTop: '15px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '7px', marginTop: '16px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '6px', marginTop: '17px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '5px', marginTop: '18px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '4px', marginTop: '19px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '3px', marginTop: '20px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '2px', marginTop: '21px' }}></div>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500' style={{ height: '1px', marginTop: '22px' }}></div>
            </div>
        </footer>
    )
}

export default Footer