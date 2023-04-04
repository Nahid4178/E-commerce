import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Col, Container, Row } from 'reactstrap'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import { cartActions } from '../redux/slices/cartSlice'
import '../style/product-detailes.css'
import CommonSection from '../UI/CommonSection'

const ProductDetails = () => {

const {id} = useParams()
const product = products.find(item => item.id === id)

const {imgUrl, productName, price, avgRating, reviews, description, shortDesc} =product

const [tab, setTab] = useState('desc')

const dispatch = useDispatch()

const addToCart = () => {
  dispatch(
    cartActions.addItem({
      id,
      imgUrl,
      productName,
      price,
    })
  );

  toast.success('Product added successfully')
}

useEffect(() => {
  window.scrollTo(0,0)
}, [product])

  return (
    <Helmet title= 'productDetails'>
        <CommonSection/>


        <section>
        <Container>
          <Row>
            <Col lg='6'>
            <img src={imgUrl} alt="" />
            </Col>
            <Col lg='6'>
            <div className="product__details">
              <h2>{productName}</h2>
              <div className="product__rating d-flex align-items-center gap-5 mb-4">
                <div>
                  <span>
                    <i class='ri-star-s-fill'></i>
                  </span>
                  <span>
                    <i class='ri-star-s-fill'></i>
                  </span>
                  <span>
                    <i class='ri-star-s-fill'></i>
                  </span>
                  <span>
                    <i class='ri-star-s-fill'></i>
                  </span>
                  <span>
                    <i class='ri-star-half-s-line'></i>
                  </span>
                </div>
                <p>({avgRating} ratings)</p>
              </div>
              <span className='product__price'>${price}</span>
              <p>{shortDesc}</p>
              <motion.button whileTap={{scale:1.2}} className="buy__btn" onClick={addToCart}>Add To Cart</motion.button>
            </div>
            </Col>
          </Row>
        </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg='12'>
              <div className="tap__wrapper d-flex align-items-center gap-5">
                  <h6 className={`${tab=== 'desc' ? 'active__tab': ''}`} onClick={()=> setTab('desc')} >Description</h6>


                  
                  <h6 className={`${tab=== 'rev' ? 'active__tab': ''}`} onClick={()=> setTab('rev')}>Reviews ({reviews.length})  </h6>
              </div>

                {tab==="desc" ? (
                <div className="tab__content mt-4">
                <p>{description}</p>
              </div>
              ) : (
                <div className='product__review mt-5'>
                  <div className="review__wrapper">
                    <ul>
                      {reviews.map((item, i)=>(
                        <li key={i}>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                </div>
              )}

              
              </Col>
            </Row>
          </Container>
        </section>

    </Helmet>
  )
}

export default ProductDetails