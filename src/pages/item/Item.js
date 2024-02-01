import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './item.css'
import Loading from '../../components/Loading';
import Slide from '../../components/Slide';
import GeneralItemTab from '../../components/GeneralItemTab';
import config from '../../config'

const ItemPage = () => {
    const [isClickSize, setIsClickSize] = useState(false)
    const [selectSize, setSelectSize] = useState('m')
    const [product, setProduct] = useState([])
    const [randomList, setRandomList] = useState()
    const [diffSize, setDiffSize] = useState([]);
    const [indexImg, setIndexImg] = useState(0)
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const listSize = ['s', 'm', 'l', 'xl', '2xl', '3xl']
    const navigate = useNavigate()
    const { id } = useParams()

    // cap nhat danh sach gio hang
    const [dataCart, setDataCart] = useState(() => {
        // lay du lieu tu localstorage
        const cartData = JSON.parse(localStorage.getItem('listCart'))
        return cartData || []
    })

    // cập nhật du lieu tu localstorage khi dataCart thay đổi
    useEffect(() => {
        localStorage.setItem('listCart', JSON.stringify(dataCart))
    }, [dataCart])

    const addToCart = (cartItem) => {
        setDataCart(() => {
            console.log(cartItem)
            const newDataCart = [...dataCart, cartItem];
            localStorage.setItem('listCart', JSON.stringify(newDataCart));
            return newDataCart
        })
        // async function navigateLoad(){
        // navigate('/cart')
        window.location.reload()
        // con
        // } 
        // navigateLoad()
    }
    // luu thong tin vao localstorage

    // fetch API
    useEffect(() => {
        window.scrollTo(0, 0)
        const listSize = ['s', 'm', 'l', 'xl', '2xl', '3xl']
        const APIRequest = [
            axios.get(`${config.BASE_URL}/product/${id}`),
            axios.get(`${config.BASE_URL}/product/random`)
        ]
        Promise.all(APIRequest)
            .then(res => {

                setProduct(res[0].data);
                setRandomList(res[1].data)
                setLoading(false);
                const findDiffSize = (arr1, arr2) => {
                    return arr1.filter(item => !arr2.includes(item))
                        .concat(arr2.filter(item => !arr1.includes(item)));
                };
                // Lấy ra những phần tử khác nhau khi mảng thay đổi
                const newDiffSize = findDiffSize(listSize, res.data.size);
                setDiffSize(newDiffSize);
            })
            .catch(e => {
                setLoading(false);

                console.log('Error : ', e);
                console.log(e.message);
            })
    }, [])

    function Quantity() {
        return (
            <div className='quantity flex items-center gap-4 '>
                <p className='font-medium'>Quantity:</p>
                <div className='quantity flex'>
                    <button
                        onClick={() => {
                            const quantityDown = Number(quantity) - 1
                            if (quantityDown > 0) {
                                setQuantity(quantityDown)
                            }
                        }}
                        className='flex justify-center items-center w-10 bg-white hover:bg-gray-200 font-bold text-2xl border'
                    >
                        <span className='text-black'>-</span>
                    </button>
                    <input
                        type='number'
                        value={quantity}
                        onChange={(e) => {
                            setQuantity(e.target.value)
                        }}
                        className='p-2  w-12 text-center text-black bg-gray-100 border-y'
                        disabled
                    ></input>
                    <button
                        onClick={() => {
                            const quantityUp = Number(quantity) + 1
                            setQuantity(quantityUp)
                        }}
                        className='flex justify-center items-center w-10 bg-white hover:bg-gray-200 font-bold text-2xl border'
                    >
                        <span className='text-black'>+</span>
                    </button>
                </div>
            </div >
        )
    }
    return (
        <>
            {loading ?
                <Loading /> : (
                    <section id='item-page' className='p-24 mt-16 text-black '>
                        <div>
                            <div className='m-auto flex items-start justify-center gap-16 py-24 px-10 backdrop-blur-2xl'>
                                <div className=' '>
                                    {product.img && Array.isArray(product.img) && (
                                        <div className='flex items-start'>
                                            <div style={{ height: '700px' }} className='w-36 flex flex-col overflow-y-auto overflow-hidden'>
                                                {product.img.map((i, index) => (
                                                    <img
                                                        onClick={() => { setIndexImg(index) }}
                                                        key={index}
                                                        src={i}
                                                        alt='product'
                                                        className='w-full aspect-square object-cover opacity-60 hover:opacity-100 duration-200 cursor-pointer' />
                                                ))}
                                            </div>
                                            <div>
                                                <img src={product.img[indexImg]} alt='product' style={{ width: '525px', height: '700px', objectFit: 'cover' }} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className='w-1/4 aspect-square flex flex-col justify-start gap-8 relative'>
                                    <h1 className='text-2xl font-bold uppercase mb-2 border-b border-gray-400 text-gray-600 '>{product.name}</h1>
                                    <div className='flex gap-2'>
                                        <div>
                                            <i className="fa-solid fa-star text-amber-500"></i>
                                            <i className="fa-solid fa-star text-amber-500"></i>
                                            <i className="fa-solid fa-star text-amber-500"></i>
                                            <i className="fa-solid fa-star text-amber-500"></i>
                                            <i className="fa-solid fa-star text-amber-500"></i>
                                        </div>| <span>123</span>
                                    </div>
                                    <div className='flex items-end py-4 border-y-2 border-black border-dotted'>
                                        <p className=' text-xl font-medium'><span>$</span> {product.price}</p>
                                        <p className='text-green-500 border-l border-black pl-4 ml-4'>
                                            <i className="fa-solid fa-truck-fast text-green-500"></i>
                                            Free Shipping
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-xl font-medium mb-2'>SIZE</p>
                                        <ul className=' flex uppercase'>
                                            {listSize.map((item) => {
                                                if (!diffSize.includes(item)) {
                                                    return <li
                                                        onClick={() => {
                                                            let clicked = !isClickSize
                                                            setSelectSize(item)
                                                            setIsClickSize(clicked)
                                                        }}
                                                        key={item}
                                                        className={`${selectSize === item ? 'border-2 border-indigo-500' : ''} cursor-pointer hover:bg-white  flex items-center justify-center w-12 aspect-square font-medium`}>
                                                        <span>{item}</span>
                                                    </li>
                                                } else {
                                                    return <li key={item} className=' no-size flex items-center justify-center w-12 aspect-square font-medium'>
                                                        {item}
                                                    </li>
                                                }
                                            })}
                                        </ul>
                                    </div>
                                    <p className='font-medium'>{product.amount} in stock</p>
                                    <Quantity />
                                    <button
                                        onClick={() => addToCart({
                                            id: product._id,
                                            name: product.name,
                                            price: product.price,
                                            quantity: quantity,
                                            size: selectSize,
                                            img: product.img[0],
                                        })}
                                        className=' relative bg-white text-black p-4 w-full rounded-full overflow-hidden border-black border-2 group/item before:absolute before:h-full  before:bg-blue-500 before:w-0 before:top-0 before:right-0 before:duration-500  hover:before:bg-indigo-500  hover:before:w-full hover:before:duration-500 hover:before:left-0 '>
                                        <span className='relative z-10 duration-500 text-xl flex items-center justify-center gap-1 font-bold group-hover/item:text-white group-hover/item:duration-500 uppercase'>
                                            Add to cart
                                        </span>
                                    </button>
                                    <div>
                                        <h6 className='font-medium text-lg mb-3 uppercase'>describe:</h6>
                                        <p>{product.describe}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <GeneralItemTab />
                        <div className='pt-24'></div>
                        <div className='p-24 backdrop-blur-xl'>
                            <p className='text-3xl mb-8 underline'>YOU MAY ALSO LIKE</p>
                            <div >
                                <Slide dataRender={randomList} />
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default ItemPage