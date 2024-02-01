import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

import Loading from '../../../components/Loading';
// import Button from '../../../components/button/Button';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:4321/product')
      .then(function (res) {
        setLoading(false)
        setProducts(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <div>
      {loading ? <Loading /> : (
        <div className='py-36 mt-16 gap-4 p-24 bg-[url(https://i.pinimg.com/564x/03/90/fd/0390fd80a363694f30303cf68edd3813.jpg)] bg-contain bg-repeat-x	bg-fixed'>
          <div className='flex flex-col items-center backdrop-blur-md p-24'>
            <p className='uppercase underline font-bold text-2xl'>tất cả sản phẩm</p>
            <div className='grid grid-cols-4 gap-8 justify-center pt-24'>
              {products.map(product => {
                return (
                  <Link to={`/admin/showProduct/${product._id}`} key={product._id} className='shadow-xl overflow-hidden hover:scale-105'>
                    <img src={product.img[0]} alt={product.name} className='w-full aspect-square object-cover bg-black' />
                    <div className='p-4 bg-white'>
                      <h2 title={product.name} className="text-lg font-bold uppercase mb-2 border-b border-gray-400 text-gray-600 text-ellipsis text-nowrap overflow-hidden"> {product.name}</h2>
                      <p className='font-medium text-gray-500 '>price: <span className='font-medium text-sm capitalize'>{product.price}</span>$</p>
                      <p className='font-medium text-gray-500 '>gender: <span className='font-medium text-sm capitalize'>{product.gender}</span></p>
                      <p className='font-medium text-gray-500 '>type: <span className='font-medium text-sm capitalize'>{product.type}</span></p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Home