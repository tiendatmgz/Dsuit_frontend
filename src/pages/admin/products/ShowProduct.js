import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
// import '../admin.css'
import Loading from '../../../components/Loading'
import config from '../../../config'
// import Button from '../../../components/button/Button'
const ShowProduct = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({})
  const [indexImg, setIndexImg] = useState(0)
  const [diffSize, setDiffSize] = useState([]);
  const listSize = ['s', 'm', 'l', 'xl', '2xl', '3xl']
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios.get(`${config.BASE_URL}/product/${id}`)
      .then(res => {
        setLoading(false);
        setProduct(res.data);
        console.log(res.data)
        // Hàm để lấy ra những phần tử khác nhau giữa hai mảng
        const findDiffSize = (arr1, arr2) => {
          return arr1.filter(item => !arr2.includes(item))
            .concat(arr2.filter(item => !arr1.includes(item)));
        };
        // Lấy ra những phần tử khác nhau khi mảng thay đổi
        const newDiffSize = findDiffSize(listSize, res.data.size);
        setDiffSize(newDiffSize);
      })
      .catch(e => {
        console.log('Error : ', e);
      })
  }, [])
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className='p-24 mt-16  bg-[url(https://i.pinimg.com/564x/03/90/fd/0390fd80a363694f30303cf68edd3813.jpg)] bg-repeat-x bg-fixed'>
          <div className='grid grid-cols-2 gap-8 p-24 backdrop-blur-md'>
            <div className=''>
              {product.img && Array.isArray(product.img) && (
                <div className='flex gap-1 '>
                  <div style={{ height: '700px' }} className='w-36 flex flex-col overflow-y-auto overflow-hidden'>
                    {product.img.map((i, index) => (
                      <img onClick={() => { setIndexImg(index) }} key={index} src={i} alt='product' className='w-full object-cover ' />
                    ))}
                  </div>
                  <div className=''>
                    <img src={product.img[indexImg]} alt='anh' style={{ width: '525px', height: '700px', objectFit: 'cover' }} />
                  </div>
                </div>
              )}
            </div>
            {/* ----------------------- */}
            <div className=' flex flex-col gap-4'>
              <h1 className='font-bold  underline uppercase text-4xl'>{product.name}</h1>
              <hr />
              <p className='text-xl font-medium capitalize'>price:<span className='text-lg text-gray-600'> {product.price}$</span></p>
              <p className='text-xl font-medium capitalize'>gender:<span className='text-lg text-gray-600'> {product.gender}</span></p>
              <p className='text-xl font-medium capitalize'>type:<span className='text-lg text-gray-600'> {product.type}</span></p>
              <p className='text-xl font-medium capitalize'>size:<span className='text-lg font-medium'> {
                (<ul className='size flex gap-4 uppercase'>

                  {listSize.map((i) => (
                    <li className={`${diffSize.includes(i) ? 'no-size' : ''} flex items-center justify-center w-12 aspect-square border-2 border-black`}>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>)
              }</span></p>
              <p className='text-lg text-gray-600 font-medium capitalize'>{product.amount} in stock</p>
              <p className='text-xl font-medium capitalize'>describe:
                <p className='text-lg text-gray-600'> {product.describe ||'không có thông tin mô tả'}</p></p>
              <hr />
              <ul className='grid grid-cols-2 gap-8 justify-between '>
                <li className='flex bg-indigo-500'>
                  <Link to={`/admin/updateProduct/${id}`} className='border-2 border-black text-center  w-full p-4 text-white'>
                    <i class="fa-solid fa-pen-to-square"></i>{' '}
                    Edit
                  </Link>
                </li>
                <li className='flex bg-red-500 '>
                  <a href={`/admin/deleteProduct/${id}`} className='border-2 border-black text-center  w-full p-4 text-white'>
                    <i class="fa-solid fa-trash"></i>{' '}
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowProduct