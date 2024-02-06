import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='text-white '>

            <div className='  w-full relative '>
                <div className='bg-red-600 h-full w-full absolute top-0 left-0 flex justify-center items-center overflow-hidden'>
                    <div className='bg-red-700 w-4/5 aspect-square rounded-full flex justify-center items-center'>
                        <div className='bg-red-800 w-3/5 aspect-square rounded-full flex justify-center items-center'>
                            <div className='bg-red-900 w-2/5 aspect-square rounded-full '></div>
                        </div>
                    </div>
                </div>
                <div className='relative z-10 flex  justify-center w-full px-96 backdrop-blur-lg'>
                    <ul className='flex w-full justify-around border-b border-white py-12' >
                        <li className='flex gap-2 justify-center items-center'><i className="text-2xl fa-solid fa-lock fa-lg"></i><span>Secure Payment</span></li>
                        <li className='flex gap-2 justify-center items-center'><i className="text-2xl fa-solid fa-truck fa-lg"></i><span>Express Shipping</span></li>
                        <li className='flex gap-2 justify-center items-center'><i className="text-2xl fa-solid fa-right-left fa-lg"></i><span>Free Return</span></li>
                    </ul>
                </div>
                <div className='grid grid-cols-4  gap-16 justify-center  w-full p-12 px-96 relative z-10 backdrop-blur-lg'>
                    <div className='flex flex-col gap-10'>
                        <h2 className='text-xl uppercase border-b-2 border-amber-400'>D-SUIT</h2>
                        <p className='text-gray-100 text-justify'>Stay up to date with the latest trends and promotions by following us on social media. Join the D-SUIT community today.</p>
                        <div className='grid grid-cols-4 gap-8 text-2xl'>
                            <a href='' className='flex items-center justify-center'><i className="text-2xl hover:scale-125 fa-brands fa-facebook"></i></a>
                            <a href='' className='flex items-center justify-center'><i className="text-2xl hover:scale-125 fa-brands fa-instagram"></i></a>
                            <a href='' className='flex items-center justify-center'><i className="text-2xl hover:scale-125 fa-brands fa-linkedin"></i></a>
                            <a href='' className='flex items-center justify-center'><i className="text-2xl hover:scale-125 fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h2 className='text-xl uppercase border-b-2 border-amber-400'>Shop</h2>
                        <ul className='flex flex-col gap-2 list-inside list-disc'>
                            <li><Link to='/all' className='text-gray-100 hover:underline'>Shop</Link></li>
                            <li><Link to='/men' className='text-gray-100 hover:underline'>Men</Link></li>
                            <li><Link to='/women' className='text-gray-100 hover:underline'>Women</Link></li>
                            <li><Link to='/accessory' className='text-gray-100 hover:underline'>Accessories</Link></li>
                            <li><Link to='/new-arrival' className='text-gray-100 hover:underline'>New Arrivals</Link></li>

                        </ul>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h2 className='text-xl uppercase border-b-2 border-amber-400'>About</h2>
                        <ul className='flex flex-col gap-2 list-inside list-disc'>
                            <li><Link to='/' className='text-gray-100 hover:underline'>Home</Link></li>
                            <li><Link to='/contact' className='text-gray-100 hover:underline'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h2 className='text-xl uppercase border-b-2 border-amber-400'>Need Help?</h2>
                        <ul className='flex flex-col gap-2 list-inside list-disc'>
                            <li><Link to='/my-account' className='text-gray-100 hover:underline'>Account</Link></li>
                            <li><Link to='/cart' className='text-gray-100 hover:underline'>Cart</Link></li>
                            <li><Link to='/' className='text-gray-100 hover:underline'>Checkout</Link></li>
                        </ul>
                    </div>
                </div>
                <div className=' relative px-96 py-10 flex justify-start gap-16 w-full backdrop-blur-lg'>
                    <p><i className="text-xl fa-solid fa-phone-volume"></i> HOTLINE - <a href='#' >0967.454.932</a></p>
                    <p><i className="text-xl fa-solid fa-envelope"></i> SEND MAIL - <a href='#' >tiendatyenbai2001@gmail.com</a></p>
                </div>
            </div>


        </footer>
    )
}

export default Footer