import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from "../components/Helmet/Helmet"
import CommonSection from '../UI/CommonSection'

import '../style/shop.css'

import { useState } from 'react'
import products from '../assets/data/products'
import ProductList from '../UI/ProductList'
  
const Shop = () => {


const [productsData, setProductsData] = useState(products)


const handleFilter = (e) =>{
  const filterValue = e.target.value

  if(filterValue === "pizza"){
    const filteredProducts = products.filter((item)=> item.category==="pizza");
    setProductsData(filteredProducts)
  }
  if(filterValue === "bargar"){
    const filteredProducts = products.filter((item)=> item.category==="bargar");
    setProductsData(filteredProducts)
  }
  if(filterValue === "food"){
    const filteredProducts = products.filter((item)=> item.category==="food");
    setProductsData(filteredProducts)
  }
  if(filterValue === "crem"){
    const filteredProducts = products.filter((item)=> item.category==="crem");
    setProductsData(filteredProducts)
  }
  if(filterValue === "Crema"){
    const filteredProducts = products.filter((item)=> item.category==="Crema");
    setProductsData(filteredProducts)
  }
}

const handleSearch = e =>{
  const searchterm = e.target.value

  const searchedProducts = products.filter(item=> item.productName.toLowerCase().includes(searchterm.toLowerCase()))

  setProductsData(searchedProducts)
}

  return (
    <Helmet title ='Shop'>
      <CommonSection title='product' />
      <section>
      <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className="filter__widget">
                <select onChange={handleFilter} >
                <option>Filter By Category</option>
                  <option value="pizza">Pizza</option>
                  <option value="bargar">Bargar</option>
                  <option value="crem">Crem</option>
                  <option value="Crema">Crema</option>
                  <option value="food">Food</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
            <div className="filter__widget">
                <select >
                <option>Sort By</option>
                  <option value="ascending">lunce</option>
                  <option value="descending">Dinner</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="search__box">
                <input type="text" placeholder='Search....' onChange={handleSearch} />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
              productsData.length === 0? <h1>No Products are found!</h1> : <ProductList data={productsData} />
            }
          </Row>
        </Container>
      </section>
        

    </Helmet>
  )
}

export default Shop