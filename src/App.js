import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Item from "./pages/item/Item";
import Cart from "./pages/Cart";
import { MyAccount } from "./pages/account/MyAccount";
import Product from "./pages/Product";
import Admin from "./pages/admin/Admin";
import ItemPage from "./pages/item/Item";
import UserAccount from "./pages/account/UserAccount";
import NotFound from "./pages/NotFound";


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
    <Admin /> :
    (
      <div className="App  text-classic-blue">
        <Navbar />
        <Routes>
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
