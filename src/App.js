import { useEffect, useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar";
import { MyAccount } from "./pages/account/MyAccount";
import Product from "./pages/Product";
import ItemPage from "./pages/item/Item";
import UserAccount from "./pages/account/UserAccount";

// import Admin from "./pages/admin/Admin";
import AdminHome from "./pages/admin/products/Home";
import CreateProduct from "./pages/admin/products/CreateProduct";
import ShowProduct from "./pages/admin/products/ShowProduct";
import UpdateProduct from "./pages/admin/products/UpdateProduct";
import DeleteProduct from "./pages/admin/products/DeleteProduct";
import NotFound from "./pages/NotFound";
import AuthForm from "./component.test";


function App() {
  // const [showCart, setShowCart] = useState(true)

  const location = useLocation();
  const adminPath = location.pathname.split('/')[1]

  // var productPath
  const pathList = [
    "/all", "/men", "/men/top", "/men/bottom",
    "/men/vest", "/men/jacket", "/men/shirt", "/men/trouser",
    "/men/jean", "/men/short", "/women", "/women/top",
    "/women/bottom", "/women/vest", "/women/jacket", "/women/shirt",
    "/women/trouser", "/women/jean", "/women/short", "/women/dress",
    "/new-arrival"
  ]

  function checkProductPath() {
    return pathList.includes(location.pathname) ? location.pathname : ''
  }

  console.log(!!JSON.parse(localStorage.getItem('user')))
  // console.log()

  return adminPath === 'admin' ?
    (
      <div id='admin' >
        <div className='fixed px-24 top-0 font-bold text-3xl flex justify-between items-center h-16 w-full z-50 bg-black text-white'>
          <Link to='/admin' ><span className='text-indigo-500'>D-SUIT</span> Admin</Link>
          <div className='flex items-center gap-4'>
            <a href={'/admin/customers'} className='text-base hover:bg-indigo-500 hover:text-white border-2 uppercase font-medium border-black'>khách hàng</a>
            <a href={'/admin/createProduct'} className='text-base hover:bg-indigo-500 hover:text-white border-2 uppercase font-medium border-black'>thêm sản phẩm +</a>
          </div>
        </div>
        <Routes>
          <Route path='/admin' element={<AdminHome />} />
          <Route path='/admin/createProduct' element={<CreateProduct />} />
          <Route path='/admin/showProduct/:id' element={<ShowProduct />} />
          <Route path='/admin/updateProduct/:id' element={<UpdateProduct />} />
          <Route path='/admin/deleteProduct/:id' element={<DeleteProduct />} />
        </Routes>
      </div>
    ) : (
      <div className="App  text-white">
        <Navbar />
        <Routes>
          <Route path="/test" element={<AuthForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/profile" element={<UserAccount />} />
          <Route path="/product/:id" element={<ItemPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path={checkProductPath()} element={<Product />} />
          {/* route */}
        </Routes>
        <Footer />
      </div>
    );
}


export default App;
