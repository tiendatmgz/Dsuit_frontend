import React, { useEffect, useState } from 'react'
// import { MultiSelect } from "react-multi-select-component";
// import Button from '../../../components/button/Button'
import axios from 'axios';
import Loading from '../../../components/Loading'
import { useNavigate, useParams } from 'react-router-dom';
const UpdateProduct = () => {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState(null)
  const [size, setSize] = useState([])
  const [img, setImg] = useState([])
  const [amount, setAmount] = useState(null)
  const [describe, setDescribe] = useState('')

  // validate
  const [validName, setValidName] = useState(false)
  const [validGender, setValidGender] = useState(false)
  const [validType, setValidType] = useState(false)
  const [validPrice, setValidPrice] = useState(false)
  const [validSize, setValidSize] = useState(false)
  const [validAmount, setValidAmount] = useState(false)
  const [validImg, setValidImg] = useState({ status: false, message: "" })

  const [imgURL, setImgURL] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const listSize = ['s', 'm', 'l', 'xl', '2xl', '3xl']
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:4321/product/${id}`)
      .then((res) => {
        setName(res.data.name)
        setPrice(res.data.price)
        setType(res.data.type)
        setGender(res.data.gender)
        setSize(res.data.size)
        setImg(res.data.img)
        setAmount(res.data.amount)
        setDescribe(res.data.describe)
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false)
        console.log('Error : ', e);
      })

  }, [])

  const handleCheckboxChange = (option, setOption, checkboxId) => {
    // Kiểm tra xem checkbox đã được chọn hay không
    const isChecked = option.includes(checkboxId);
    // Nếu chưa được chọn, thêm vào danh sách; ngược lại, loại bỏ khỏi danh sách
    if (!isChecked) {
      setOption([...option, checkboxId]);
    } else {
      setOption(option.filter(id => id !== checkboxId));
    }
  };
  //check img url la anh hay khong
  function isImageURL(url, callback) {
    var img = new Image();
    img.onload = function () {
      callback(true);
    };
    img.onerror = function () {
      callback(false);
    };
    img.src = url;
  }

  const handleClickAddNewProduct = () => {
    const listCheck = [!!name, !!gender, !!type, !!price, !!size.length, !!img.length, !!amount]
    if (listCheck.includes(false)) {
      if (!name) {
        setValidName(true)
      }
      if (!price) {
        setValidPrice(true)
      }
      if (!gender) {
        setValidGender(true)
      }
      if (!type) {
        setValidType(true)
      }
      if (!size.length) {
        setValidSize(true)
      }
      if (!img.length) {
        setValidImg({ status: true, message: "sản phẩm cần tối thiểu một hình ảnh" })
      }
      if (!amount) {
        setValidAmount(true)
      }
      return
    }
    const data = {
      name, gender, type, price, size, img, amount, describe
    }
    setLoading(true)
    axios.put(`http://localhost:4321/product/${id}`, data)
      .then(() => {
        alert('Lưu thành công!')
        setLoading(false)
        navigate(`/admin/showProduct/${id}`)
      })
      .catch(e => {
        alert("Lỗi! Vui lòng kiểm tra lại")
        console.log(e)
        setLoading(false)
      })
  }
  return (
    <>
      {loading ? <Loading /> : (
        <div className='flex mt-16 justify-center p-24 bg-[url(https://i.pinimg.com/564x/03/90/fd/0390fd80a363694f30303cf68edd3813.jpg)] bg-repeat-x	bg-fixed'>
          <div className='backdrop-blur-md p-24 w-full' >
            <p className='flex gap-2 items-end'>
              <span className='font-bold text-2xl underline uppercase'>update product</span>
              <span >Name({name}) - Id({id})</span></p>
            <div className='grid grid-cols-2 gap-12 my-16'>
              <div className='flex flex-col gap-4'>
                <div className='grid grid-cols-2 gap-4'>

                  {/* name */}
                  <div className='flex flex-col  relative'>
                    <label className=' mr-2 capitalize font-medium'>Tên sản phẩm:<sup className='text-rose-500'>*</sup></label>
                    <input
                      type='text'
                      value={name}
                      placeholder='Nhập tên sản phẩm'
                      className='px-2 py-1 border border-black focus-visible:outline-0'
                      onLoad={() => { setValidName(false) }}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      onBlur={() => {
                        !!name ? setValidName(false) : setValidName(true)
                      }}
                    />
                    <div className='text-xs text-red-500 mt-1' >{validName ? 'Tên sản phẩm không được để trống' : ''}</div>
                  </div>

                  {/* price */}
                  <div className='flex flex-col '>
                    <label className='mr-2 capitalize font-medium'>giá bán(USD):<sup className='text-rose-500'>*</sup></label>
                    <input
                      type='number'
                      value={price}
                      placeholder='Nhập giá bán'
                      className='px-2 py-1 border border-black focus-visible:outline-0'
                      onChange={(e) => {
                        setPrice(e.target.value)
                      }}
                      onBlur={() => {
                        !!price ? setValidPrice(false) : setValidPrice(true)
                      }}
                    />
                    <div className='text-xs text-red-500 mt-1' >{validPrice ? 'Giá bán sản phẩm không được để trống' : ''}</div>
                  </div>
                </div>


                <div className='grid grid-cols-2 gap-4'>
                  {/* type */}
                  <div className='flex flex-col '>
                    <label className='mr-2 capitalize font-medium'>loại:<sup className='text-rose-500'>*</sup></label>
                    <select
                      value={type}
                      name="selectedFruit"
                      className='px-2 py-1 border border-black focus-visible:outline-0'
                      onChange={(e) => {
                        setType(e.target.value)
                      }}
                      onBlur={() => {
                        !!type ? setValidType(false) : setValidType(true)
                      }}
                    >
                      <option value="" className='hidden'>Select</option>
                      <option value="vest">Vests</option>
                      <option value="jacket">Jackets</option>
                      <option value="shirt">Shirts</option>
                      <option value="trouser">Trousers</option>
                      <option value="jean">Jeans</option>
                      <option value="short">Shorts</option>
                      {gender === 'women' ? (
                        <option value="dress">Dresses</option>
                      ) : ''}
                    </select>
                    <div className='text-xs text-red-500 mt-1' >{validType ? 'Loại bán sản phẩm không được để trống' : ''}</div>
                  </div>

                  {/* gender */}
                  <div className='flex flex-col '>
                    <label className='mr-2 capitalize font-medium'>giới tính:<sup className='text-rose-500'>*</sup></label>
                    <select
                      value={gender}
                      className='px-2 py-1 border border-black focus-visible:outline-0'
                      onChange={(e) => {
                        setGender(e.target.value)
                      }}
                      onBlur={() => {
                        !!gender ? setValidGender(false) : setValidGender(true)
                      }}
                    >
                      <option value="" className='hidden'>Select</option>
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                    </select>
                    <div className='text-xs text-red-500 mt-1' >{validGender ? 'Giới tính không được để trống' : ''}</div>
                  </div>
                </div>


                <div className='grid grid-cols-2 gap-4'>
                  {/* size */}
                  <div className='flex flex-col '>
                    <label className='mr-2 capitalize font-medium'>size:<sup className='text-rose-500'>*</sup></label>
                    <div className='flex gap-2 flex-wrap'>
                      {listSize.map((s) => {
                        return (
                          <div key={s} className="flex items-center">
                            <input id="default-checkbox" type="checkbox" value={s} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                              checked={size.includes(s)}
                              onChange={() => handleCheckboxChange(size, setSize, s)}
                              onBlur={() => {
                                size.length !== 0 ? setValidSize(false) : setValidSize(true)
                              }}
                            />
                            <label className="ml-1 font-medium text-gray-900 dark:text-gray-300 uppercase">{s}</label>
                          </div>
                        )
                      })}
                    </div>
                    <div className='text-xs text-red-500 mt-1' >{validSize ? 'Sản phẩm cần tối thiểu một size' : ''}</div>

                  </div>
                  {/* số lượng */}
                  <div className='flex flex-col '>
                    <label className='mr-2 capitalize font-medium'>số lượng:<sup className='text-rose-500'>*</sup></label>
                    <input
                      type='number'
                      value={amount}
                      placeholder='Nhập số lượng'
                      className='px-2 py-1 border border-black focus-visible:outline-0'
                      onChange={(e) => {
                        setAmount(e.target.value)
                      }}
                      onBlur={() => {
                        !!amount ? setValidAmount(false) : setValidAmount(true)
                      }}
                    />
                    <div className='text-xs text-red-500 mt-1' >{validAmount ? 'Số lượng sản phẩm không được để trống' : ''}</div>
                  </div>
                </div>
                <div>
                  {/* mo ta */}
                  <div className='flex flex-col w-full'>
                    <label className='mr-2 capitalize font-medium'>Mô tả:</label>
                    <textarea
                      type='text'
                      value={describe}
                      placeholder='Nhập mô tả'
                      className='px-2 py-1 border border-black focus-visible:outline-0 min-h-40'
                      onChange={(e) => {
                        setDescribe(e.target.value)
                      }} />
                  </div>
                </div>
              </div>
              <div >
                {/* image URL */}
                <div>
                  <label className='mr-2 capitalize font-medium'>thêm ảnh(URL):<sup className='text-rose-500'>*</sup></label>
                  <div className='flex'>
                    <input type='text'
                      placeholder=''
                      className=' w-3/4 px-2 py-1 border border-black focus-visible:outline-0'
                      onChange={(e) => {
                        setImgURL(e.target.value)
                      }} />
                    <button
                      onClick={() => {
                        if (imgURL === '') {
                          return setValidImg({ status: true, message: 'Vui lòng điền địa chỉ ảnh sản phẩm' })
                        }
                        isImageURL(imgURL, function (result) {
                          if (result) {
                            setImg([...img, imgURL])
                            setValidImg({ status: false, message: '' })
                          } else {
                            return setValidImg({ status: true, message: 'Sai địa chỉ URL hoặc ảnh không tồn tại' })
                          }
                        });
                      }}
                      className='bg-purple-700 text-white flex justify-center w-1/4 py-2 font-medium uppercase'>Thêm</button>
                  </div>
                  <div className='text-xs text-red-500 mt-1' >{validImg ? (validImg.message) : ''}</div>

                  <ul className='grid grid-cols-4 gap-4 justify-center my-8'>
                    {img.map((i, iIndex) => {
                      return (
                        <li key={iIndex} className='relative overflow-hidden group/img'>
                          <img src={i} alt='img' className='w-full aspect-square object-cover' />
                          <span onClick={() => {
                            setImg(img.filter(
                              (remove, removeIndex) => removeIndex !== iIndex
                            ));
                          }}
                            className='absolute hover:text-red-500 group-hover/img:bottom-0 hover:underline text-center cursor-pointer bg-white w-full  left-0 text-lg'>
                            Xóa
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <button
              onClick={handleClickAddNewProduct}
              className='bg-purple-700 text-white flex justify-center w-full py-2 font-medium uppercase '>
              save
            </button>
          </div>
        </div>
      )}
    </>

  )
}

export default UpdateProduct