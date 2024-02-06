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
  // console.log('>>>location:>>>', config.BASE_URL)
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
  }, [serverUrl])
  useEffect(() => {
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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 lg:p-24'>
            {products.map(item => {
              return (
                <div key={item._id} >
                  <Link to={`/product/${item._id}`} className="group block overflow-hidden">
                    <div className="relative w-full aspect-square">
                      <img
                        src={item.img[0]}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                      />

                      <img
                        src={item.img[1]}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                      />
                    </div>

                    <div className="relative bg-white pt-3 ">
                      <h3 className="text-lg uppercase text-gray-700 group-hover:underline group-hover:underline-offset-4 overflow-hidden text-ellipsis text-nowrap">
                        {item.name}
                      </h3>

                      <p className="mt-1.5 text-sm tracking-wide text-gray-900">{item.type}</p>
                      <p className="mt-1.5 text-lg tracking-wide text-gray-900">${item.price}</p>
                    </div>
                  </Link>
                </div>

              )
            })}
          </div>
        </div>
        )}
    </>
  )
}

export default Product