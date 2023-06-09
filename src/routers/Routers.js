import { Route, Routes } from "react-router-dom"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Home from "../pages/Home"
import Login from "../pages/Login"
import ProductDetails from "../pages/ProductDetails"
import Shop from "../pages/Shop"
import Signup from "../pages/Signup"



const Routers = () => {
  return (
    
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/shop/:id" element={<ProductDetails/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
  )
}

export default Routers