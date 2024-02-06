import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Btn from '../components/Btn';

const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const listCart = JSON.parse(localStorage.listCart)
    const totalPrice = listCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    function QuantityCount({ quantityCount, index }) {
        const [quantity, setQuantity] = useState(quantityCount)
        return (
            <div className=' flex items-center gap-4  '>
                <div className=' flex'>
                    <button
                        onClick={() => {
                            const quantityDown = Number(quantity) - 1
                            if (quantityDown > 0) {
                                setQuantity(quantityDown)
                                listCart[index].quantity = quantity - 1
                                localStorage.setItem('listCart', JSON.stringify(listCart))
                            }
                        }}
                        className='flex justify-center items-center w-8  bg-gray-200 font-bold text-2xl'>
                        <span className='text-black'>-</span>
                    </button>
                    <input
                        type='number'
                        value={quantity}
                        className={`${quantity === 1 ? '' : ""} p-2 border w-16 text-center text-black`}
                    ></input>
                    <button
                        onClick={() => {
                            const quantityUp = Number(quantity) + 1
                            setQuantity(quantityUp)
                            listCart[index].quantity = quantity + 1
                            localStorage.setItem('listCart', JSON.stringify(listCart))

                        }
                        }
                        className='flex justify-center items-center w-8  bg-gray-200 font-bold text-2xl'
                    >
                        <span className='text-black'>+</span>
                    </button>
                </div>
            </div >
        )
    }
    return (
        <div className='mt-16 p-24 text-black'>
            <div className=' p-24'>
                <h1 className='text-6xl uppercase font-medium text-center underline'>cart</h1>
                <span>({listCart.length} sản phẩm)</span>
                <div className='flex gap-12 my-10'>
                    <div className='w-2/3 '>
                        {listCart.map((cart, index) => {
                            return (
                                <div key={index} className='grid grid-cols-7 justify-between items-center gap-4 py-4 border-t first:border-none'>
                                    <Link to={`/product/${cart.id}`}>
                                        <img src={cart.img} alt={cart.name} className='w-48 aspect-square object-cover' />
                                    </Link>
                                    <Link to={`/product/${cart.id}`} className='col-start-2 col-span-2'>
                                        <div className='uppercase text-2xl font-bold text-gray-500 '>{cart.name}</div>
                                    </Link>
                                    <div className='text-red-500 font-medium text-right'>{cart.price} $</div>
                                    <div className=' font-medium text-center uppercase'>{cart.size}</div>
                                    <QuantityCount quantityCount={cart.quantity} index={index} />
                                    <div className='text-red-500 hover:underline cursor-pointer text-center'>xóa</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className=' w-1/3 h-max '>
                        <div className='p-5 pt-0 flex flex-col '>
                            <div className='p-4 flex justify-between items-center border-b  border-black'>
                                <span className='capitalize'>Provisional amount:</span><span>{totalPrice} $</span>
                            </div>
                            <div className='p-4 flex justify-between items-center mb-12'>
                                <span className='text-lg font-medium capitalize'>total:</span>
                                <span className='text-red-500 font-bold text-2xl'>{totalPrice} $</span>
                            </div>
                            <div className='flex flex-col gap-8'>
                                <Btn to={'#'} title={'CHECK OUT'} />
                                <Btn to={'/all'} title={'CONTINUE SHOPPING'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart