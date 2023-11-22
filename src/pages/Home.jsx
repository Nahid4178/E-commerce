import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Clock from '../UI/Clock'
import ProductList from '../UI/ProductList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import heroImg from '../assets/images/hero-img01.png'
import Helmet from '../components/Helmet/Helmet'
import Services from '../services/Services'
import '../style/home.css'

const Home = () => {



  const [trendingproduct, setTrendingproduct] = useState(products)
  const [bestSeles, setBestseles] = useState(products)
  const [mobile, setMobile] = useState(products)
  const [wireless, setWireless] = useState(products)
  const [watch, setWatch] = useState(products)
  const year = new Date().getFullYear()

useEffect(() => {
  const filteredtrendingProducts = products.filter((item)=> item.category==="bargar");
  const filteredbestSelesProducts = products.filter((item)=> item.category==="pizza");
  const filteredmobileProducts = products.filter((item)=> item.category==="food");
  const filteredwirelessProducts = products.filter((item)=> item.category==="crem");
  const filteredwatchProducts = products.filter((item)=> item.category==="Crema");

  setTrendingproduct(filteredtrendingProducts);
  setBestseles(filteredbestSelesProducts);
  setMobile(filteredmobileProducts);
  setWireless(filteredwirelessProducts);
  setWatch(filteredwatchProducts);

  
}, [])



  return <Helmet title={'Home'}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">
                Trending product in {year}
              </p>

              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At maiores magnam repellat! Ipsam quibusdam minima eius rerum pariatur culpa maiores?</p>

              <motion.button  whileTap={{scale:1.2}} className="buy__btn"> <Link to='/shop'>SHOP NOW</Link> </motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
          <div className="hero__img">
            <img src={heroImg} alt="" />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services />
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-4'>
          <h2 className='section__title'>Trending Product</h2>
          </Col>
          <ProductList data={trendingproduct}/> 
        </Row>
      </Container>
    </section>
    <section className="best__sales">
      <Container>
      <Row>
          <Col lg='12' className='text-center mb-4'>
          <h2 className='section__title'>Best Seles</h2>
          </Col>
         <ProductList data={bestSeles}/>
        </Row>
      </Container>
    </section>
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='6'>
          <div className="clock__top-content">
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
          </div>
          <Clock />

          <button className="buy__btn store__btn">
            <Link to="/shop">Visit Store</Link>
          </button>
          </Col>
          <Col lg='6' md='6' className='text-end'>
          <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="best__sales">
      <Container>
      <Row>
          <Col lg='12' className='text-center mb-4'>
          <h2 className='section__title'>New Arrivals</h2>
          </Col>
         <ProductList data={mobile}/>
         <ProductList data={wireless}/>
        </Row>
      </Container>
    </section>
    <section className="best__sales">
      <Container>
      <Row>
          <Col lg='12' className='text-center mb-5'>
          <h2 className='section__title'>Popular in Category </h2>
          </Col>
         <ProductList data={watch}/>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home