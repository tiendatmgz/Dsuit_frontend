import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Alert from '../../../components/popup/Alert'
import Loading from '../../../components/Loading'

const DeleteProduct = () => {
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  const handleDelete = () => {
    setLoading(true)
    axios.delete(`http://localhost:4321/product/${id}`)
      .then(() => {
        setLoading(false)
        // navigate('/admin')
      })
      .catch((e) => {
        console.log(e);
        alert('delete error. check console for more information!')
      })
  }
  return (
    <div >
      {
        loading ? <Loading /> :
          <Alert title={'notice'} message={`Xác nhận xóa sản phẩm ID(${id})`} callback={handleDelete} showOkBtn={true} showCancelBtn={true} direction={'/admin'} />
      }
    </div>
  )
}

export default DeleteProduct