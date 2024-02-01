import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './products/Home'
import ShowProduct from './products/ShowProduct';
import CreateProduct from './products/CreateProduct';
import UpdateProduct from './products/UpdateProduct';
import DeleteProduct from './products/DeleteProduct';
// import './admin.css';

const Admin = () => {
    return (
        <div id='admin' className=''>
            <div className='fixed px-24 top-0 font-bold text-3xl flex justify-between items-center h-16 w-full z-50 bg-black text-white'>
                <Link to='/admin' ><span className='text-indigo-500'>D-SUIT</span> Admin</Link>
                {/* <div className=' m-9 '> */}
                <div className='flex items-center gap-4'>
                    <a href={'/admin/customers'} className='text-base hover:bg-indigo-500 hover:text-white border-2 uppercase font-medium border-black'>khách hàng</a>
                    <a href={'/admin/createProduct'} className='text-base hover:bg-indigo-500 hover:text-white border-2 uppercase font-medium border-black'>thêm sản phẩm +</a>

                </div>
                {/* </div> */}
            </div>
            <Routes>
                <Route path='/admin' element={<Home />} />
                <Route path='/admin/createProduct' element={<CreateProduct />} />
                <Route path='/admin/showProduct/:id' element={<ShowProduct />} />
                <Route path='/admin/updateProduct/:id' element={<UpdateProduct />} />
                <Route path='/admin/deleteProduct/:id' element={<DeleteProduct />} />
            </Routes>
        </div>
    )
}

export default Admin