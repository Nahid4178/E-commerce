import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import '../style/product-card.css'

import { useDispatch } from "react-redux"
import { cartActions } from '../redux/slices/cartSlice'

import { toast } from 'react-toastify'





const ProductCard = ({item}) => {


    const dispatch = useDispatch()

    const  addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName : item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
        })
        );

        toast.success('Product Added successfully')



    }
  return (
    <Col md='4' lg='3' className='mb-3'>
    <div className='product__item'>
        <div className="product__img" style={{height:"300px", objectFit:"fill"}}>
            <Link to={`/shop/${item.id}`}>
            <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="" /></Link>
        </div>
        <div className="p-2 product__info">
        <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
        </h3>
        <span >{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2  ">
       
            <span className="price">
            $
                {item.price}
            </span>
            <motion.span whileTap={{scale:1.2}}onClick={addToCart} >
                <i class="ri-add-line"></i>
            </motion.span>
        </div>
    </div>
    </Col>
  )
}

export default ProductCard