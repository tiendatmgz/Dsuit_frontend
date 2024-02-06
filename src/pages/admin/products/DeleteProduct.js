import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Alert from '../../../components/popup/Alert'
import Loading from '../../../components/Loading'
import config from '../../../config'

const DeleteProduct = () => {
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const handleDelete = () => {
    setLoading(true)
    axios.delete(`${config.BASE_URL}/product/${id}`)
      .then(() => {
        setLoading(false)
        navigate('/admin')
      })
      .catch((e) => {
        console.log(e);
        setLoading(false)
        alert('delete error. check console for more information!')
      })
  }
  return (
    <div >
      {
        loading ? <Loading /> :
          <Alert title={'notice'} message={`Xác nhận xóa sản phẩm ID(${id})`} okEven={handleDelete} c showOkBtn={true} showCancelBtn={true} direction={'/admin'} />
      }
    </div>
  )
}

export default DeleteProduct