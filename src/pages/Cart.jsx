import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Helmet from "../components/Helmet/Helmet"
import { cartActions } from '../redux/slices/cartSlice'
import '../style/cart.css'
import CommonSection from '../UI/CommonSection'


const Cart = () => {


  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
    <Helmet title='Cart'>
        <CommonSection title="Shopping Cart" />
        <section>
          <Container>
            <Row>
              <Col lg='9'>
                {cartItems.length===0? <h1 className='fs-4 text-center'> No item added to the cart</h1> :    <table className="table bordered">
                <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                 {
                  cartItems.map((item,i) =>(
                    <Tr item={item} key={i} />
                   ))
                 }
                </tbody>
                
              </table>}
              </Col>
              <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>Subtotal</h6>
                <span className='fs-4 fw-bold'>${totalAmount}</span>
                <p className='fs-6 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div>
                <button className="buy__btn w-100">
                    <Link to='/checkout'>Checkout </Link>
                  </button>
                  <button className="buy__btn w-100">
                    <Link to='/shop'>Continue Shopping</Link>
                  </button>
                 
                </div>
              </div>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  )
};

const Tr =({item}) =>{

const dispatch= useDispatch()

const deleteProduct =() => {
  dispatch(cartActions.deleteItem (item.id))
}
  return(
    <tr>
    <td><img src={item.imgUrl} alt="" /></td>
    <td>{item.productName}</td>
    <td> ${item.price}</td>
    <td>{item.quantity}</td>
    <td>
      <i onClick={deleteProduct} class='ri-delete-bin-line'></i>
    </td>
  </tr>
  )
}

export default Cart