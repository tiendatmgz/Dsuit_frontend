import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../components/Loading';
import { Link, useLocation } from 'react-router-dom';
import config from '../config';
const Product = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [serverUrl, setServerUrl] = useState('')
  const location = useLocation();
  console.log('>>>location:>>>', config.BASE_URL)
  let serverUrl
  switch (location.pathname) {
    case '/all':
      serverUrl = `${config.BASE_URL}/product`
      break;
    case '/men':
      serverUrl = `${config.BASE_URL}/product/men`
      break;
    case '/men/top':
      serverUrl = `${config.BASE_URL}/product/men/top`
      break;
    case '/men/bottom':
      serverUrl = `${config.BASE_URL}/product/men/bottom`
      break;
    case '/men/vest':
      serverUrl = `${config.BASE_URL}/product/men/vest`
      break;
    case '/men/jacket':
      serverUrl = `${config.BASE_URL}/product/men/jacket`
      break;
    case '/men/shirt':
      serverUrl = `${config.BASE_URL}/product/men/shirt`
      break;
    case '/men/trouser':
      serverUrl = `${config.BASE_URL}/product/men/trouser`
      break;
    case '/men/jean':
      serverUrl = `${config.BASE_URL}/product/men/jean`
      break;
    case '/men/short':
      serverUrl = `${config.BASE_URL}/product/men/short`
      break;
    case '/women':
      serverUrl = `${config.BASE_URL}/product/women`
      break;
    case '/women/top':
      serverUrl = `${config.BASE_URL}/product/women/top`
      break;
    case '/women/bottom':
      serverUrl = `${config.BASE_URL}/product/women/bottom`
      break;
    case '/women/vest':
      serverUrl = `${config.BASE_URL}/product/women/vest`
      break;
    case '/women/jacket':
      serverUrl = `${config.BASE_URL}/product/women/jacket`
      break;
    case '/women/shirt':
      serverUrl = `${config.BASE_URL}/product/women/shirt`
      break;
    case '/women/trouser':
      serverUrl = `${config.BASE_URL}/product/women/trouser`
      break;
    case '/women/jean':
      serverUrl = `${config.BASE_URL}/product/women/jean`
      break;
    case '/women/short':
      serverUrl = `${config.BASE_URL}/product/women/short`
      break;
    case '/women/dress':
      serverUrl = `${config.BASE_URL}/product/women/dress`
      break;
    case '/new-arrival':
      serverUrl = `${config.BASE_URL}/product/newArrival`
      break;
    default:
      serverUrl = ''
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
    if (serverUrl) {
      axios.get(serverUrl)
        .then(function (res) {
          setLoading(false)
          setProducts(res.data.data);
          console.log(res)
        })
        .catch(function (error) {
          setLoading(false)
          console.log(error);
        })
    }
  }, [location.pathname])
  return (
    <>
      {loading ?
        <Loading /> :
        (<div className='mt-16'>
          <div className='grid grid-cols-5 gap-8 p-24 bg-gradient-to-r from-sky-500 to-indigo-500'>
            {products.map(item => {
              return (
                <Link key={item._id} to={`/product/${item._id}`} >
                  <div title={item.name} className='w-full hover:scale-105 hover:shadow-xl hover:duration-200 duration-200  shadow-black'>
                    <img src={item.img[0]} alt='product' className='w-full aspect-square object-cover' />
                    <div className='p-4 bg-white'>
                      <h4 className='text-xl font-bold uppercase mb-2 border-b border-gray-400 text-gray-600 text-nowrap overflow-hidden text-ellipsis'>{item.name}</h4>
                      <h5 className='font-medium text-gray-500'>{item.type}</h5>
                      <p className='font-medium text-gray-500'>${item.price}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        )}
    </>
  )
}

export default Product