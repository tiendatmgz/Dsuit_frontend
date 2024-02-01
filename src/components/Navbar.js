import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Btn from './Btn';
const Navbar = () => {
    const navigate = useNavigate();
    const [showCart, setShowCart] = useState(false)
    const [seed, setSeed] = useState(1);

    // cap nhat danh sach gio hang
    const [dataCart, setDataCart] = useState(() => {
        // lay du lieu tu localstorage
        const dataCart = JSON.parse(localStorage.getItem('listCart'))
        return dataCart || []
    })

    // cập nhật du lieu tu localstorage khi dataCart thay đổi
    useEffect(() => {
        localStorage.setItem('listCart', JSON.stringify(dataCart))
    }, [dataCart])

    const handleClickRemoveDataCart = (index) => {
        let newListCart = [...dataCart].filter((i, indx) => {
            return index !== indx
        })
        setDataCart(newListCart)
        localStorage.setItem('listCart', JSON.stringify(dataCart))
    }

    const scrollToAbout = () => {
        // Chuyển đến trang chủ và sau đó cuộn xuống phần "about" 
        navigate('/#aboutus');
    }

    return (
        <header key={dataCart} className='fixed top-0 w-full  z-50 text-white'>
            <div className='flex px-24 justify-between items-center h-16 bg-black backdrop-blur-lg'>
                <Link to='/' className='text-3xl text-indigo-500 font-bold px-5 py-4'>D-SUIT</Link>
                <ul className='nav-left flex items-center shrink w-2/3  h-full'>
                    <li className='nav-item h-full capitalize'><a href='#aboutus' onClick={(scrollToAbout)} className='h-full px-4 flex items-center capitalize'><span>about we</span></a></li>
                    <li className='nav-item h-full capitalize'><Link to='/all' className='h-full px-4 flex items-center capitalize'><span>shop</span></Link></li>
                    <li className='nav-item h-full capitalize'>
                        <Link to='/men' className='h-full px-4 flex items-center gap-1'>
                            <span>men</span>
                            <i className="fa-solid fa-chevron-down fa-xs"></i>
                        </Link>
                        <ul className='nav-dropdown absolute bg-black shadow-black shadow-lg'>
                            <li className='relative'>
                                <Link to='/men/top' className='flex gap-1 px-4 py-2 justify-between items-center'>
                                    <span>top</span>
                                    <i className="fa-solid fa-chevron-down fa-xs"></i>
                                </Link>
                                <ul className='nav-sub-dropdown absolute top-0 left-full bg-black shadow-black shadow-lg'>
                                    <li><Link to='/men/vest' className='flex gap-1 px-4 py-2 justify-between items-center'><span>vests</span></Link></li>
                                    <li><Link to='/men/jacket' className='flex gap-1 px-4 py-2 justify-between items-center'><span>jackets</span></Link></li>
                                    <li><Link to='/men/shirt' className='flex gap-1 px-4 py-2 justify-between items-center'><span>shirts</span></Link></li>
                                </ul>
                            </li>
                            <li className='relative'>
                                <Link to='/men/bottom' className='flex gap-1 px-4 py-2 justify-between items-center'>
                                    <span>bottom</span>
                                    <i className="fa-solid fa-chevron-down fa-xs"></i>
                                </Link>
                                <ul className='nav-sub-dropdown absolute top-0 left-full bg-black shadow-black shadow-lg'>
                                    <li><Link to='/men/trouser' className='flex gap-1 px-4 py-2 justify-between items-center'><span>trousers</span></Link></li>
                                    <li><Link to='/men/jean' className='flex gap-1 px-4 py-2 justify-between items-center'><span>jeans</span></Link></li>
                                    <li><Link to='/men/short' className='flex gap-1 px-4 py-2 justify-between items-center'><span>Shorts</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='nav-item h-full capitalize'>
                        <Link to='/women' className='h-full px-4 flex items-center gap-1'>
                            <span>women</span>
                            <i className="fa-solid fa-chevron-down fa-xs"></i>
                        </Link>
                        <ul className='nav-dropdown absolute bg-black shadow-black shadow-lg'>
                            <li className='relative'>
                                <Link to='/women/top' className='flex gap-1 px-4 py-2 justify-between items-center'>
                                    <span>top</span>
                                    <i className="fa-solid fa-chevron-down fa-xs"></i>
                                </Link>
                                <ul className='nav-sub-dropdown absolute top-0 left-full bg-black shadow-black shadow-lg'>
                                    <li><Link to='/women/vest' className='flex gap-1 px-4 py-2 justify-between items-center'><span>vests</span></Link></li>
                                    <li><Link to='/women/jacket' className='flex gap-1 px-4 py-2 justify-between items-center'><span>jackets</span></Link></li>
                                    <li><Link to='/women/shirt' className='flex gap-1 px-4 py-2 justify-between items-center'><span>shirts</span></Link></li>
                                </ul>
                            </li>
                            <li className='relative'>
                                <Link to='/women/bottom' className='flex gap-1 px-4 py-2 justify-between items-center'>
                                    <span>bottom</span>
                                    <i className="fa-solid fa-chevron-down fa-xs"></i>
                                </Link>
                                <ul className='nav-sub-dropdown absolute top-0 left-full bg-black shadow-black shadow-lg'>
                                    <li><Link to='/women/trouser' className='flex gap-1 px-4 py-2 justify-between items-center'><span>trousers</span></Link></li>
                                    <li><Link to='/women/jean' className='flex gap-1 px-4 py-2 justify-between items-center'><span>jeans</span></Link></li>
                                    <li><Link to='/women/short' className='flex gap-1 px-4 py-2 justify-between items-center'><span>Shorts</span></Link></li>
                                    <li><Link to='/women/dress' className='flex gap-1 px-4 py-2 justify-between items-center'><span>Dresses</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='nav-item h-full capitalize'><a href='/accessory' className='h-full px-4 flex items-center capitalize'><span>accessories</span></a></li>
                    <li className='nav-item h-full capitalize'><a href='/new-arrival' className='h-full px-4 flex items-center capitalize'><span>New Arrivals</span></a></li>
                </ul>
                <ul className='nav-right flex items-center h-full'>
                    <li className='h-full capitalize '><Link to='/contact' className='h-full px-4 flex items-center font-medium uppercase hover:bg-indigo-500'>contact</Link></li>
                    <li className='h-full capitalize cursor-pointer'
                        onClick={() => {
                            setShowCart(!showCart)

                        }}>
                        <div className='relative h-full px-4 flex items-center font-medium uppercase hover:bg-indigo-500 '>
                            <i className=" fa-solid fa-cart-shopping"></i>
                            {dataCart.length > 0 ?
                                <span className='absolute top-4 right-1 text-xs bg-red-500 h-4 w-4 text-center rounded-full'>{dataCart.length}</span> :
                                ''
                            }
                        </div>
                    </li>
                    <li className='h-full capitalize'>
                        <Link to='/my-account' className='h-full px-4 flex items-center capitalize hover:bg-indigo-500'>
                            <i className="fa-solid fa-user"></i>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* cart popup */}
            <div className={`${showCart ? '' : 'translate-x-full duration-500 opacity-0'} duration-500 bg-black fixed h-full w-full z-50 flex justify-end  bg-opacity-50 text-black`}>
                <div className='flex items-center justify-end h-full w-full rounded-tl-full rounded-bl-full p-4 '
                    onClick={() => setShowCart(false)}>
                    <i className='text-white text-2xl fas fa-angle-double-right'></i>
                </div>
                <div className='bg-white flex flex-col justify-between' style={{width:'500px'}}>
                    <div className='overflow-y-auto'>
                        {dataCart.length <= 0 ?
                            <div className='w-full flex items-center justify-center p-4'><p className='text-xl text-black'>No products in the cart yet</p></div> :
                            <>{dataCart.map((i, index) => {
                                return (
                                    <div key={index} className="flex justify-between px-4 py-8 border-b">
                                        <div className="flex gap-4">
                                            <img src={i.img} className="w-24 aspect-square" />
                                            <div className="">
                                                <h4 className="text-lg font-medium uppercase ">{i.name}</h4>
                                                <p className="">{i.price} $</p>
                                                <p className="">Quantity: {i.quantity}</p>
                                                <div className="flex items-center font-medium gap-2 ">

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={() => handleClickRemoveDataCart(index)}>
                                                <i className=" fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}</>
                        }

                    </div>
                    <div className="mb-16 ">
                        <p className="flex justify-between items-center p-4 border-y-2 border-dotted">
                            <span className="text-xl">Total:</span>
                            <span className="text-xl  font-medium text-rose-500">{
                                dataCart.reduce((total, item) => {
                                    return (total + item.price * item.quantity)
                                }, 0).toFixed(2)
                            } $</span>
                        </p>
                        <div className="flex flex-wrap justify-center my-4">
                            <div className="p-4 flex justify-center">
                                {/* <Btn to={'/cart'}/> */}
                                <Link
                                    to="/cart"
                                    onClick={() => setShowCart(false)}
                                    className="relative bg-white text-black p-4 w-full rounded-full overflow-hidden border-black border-2 group/item before:absolute before:h-full  before:bg-blue-500 before:w-0 before:top-0 before:right-0 before:duration-500  hover:before:bg-indigo-500  hover:before:w-full hover:before:duration-500 hover:before:left-0"
                                >
                                    <span className='relative z-10 duration-500 text-xl flex items-center justify-center gap-1 font-bold group-hover/item:text-white group-hover/item:duration-500 '>
                                        View Cart
                                    </span>
                                </Link>
                            </div>
                            <div className="p-4 flex justify-center">

                                <Link
                                    to="/check-out"
                                    className="relative bg-white text-black p-4 w-full rounded-full overflow-hidden border-black border-2 group/item before:absolute before:h-full  before:bg-blue-500 before:w-0 before:top-0 before:right-0 before:duration-500  hover:before:bg-indigo-500  hover:before:w-full hover:before:duration-500 hover:before:left-0">
                                    <span className='relative z-10 duration-500 text-xl flex items-center justify-center gap-1 font-bold group-hover/item:text-white group-hover/item:duration-500'
                                    >
                                        Checkout
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar