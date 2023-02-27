import React from 'react'
import { useNavigate } from 'react-router-dom';
import ProductBanner from '../../assets/productHome.png'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Body from '../../assets/body.PNG'
import Face from '../../assets/face.PNG'
import Hair from '../../assets/hair.PNG'
import { PRODUCTS_SLIDE } from '../../products';
import { ProductsCarousel } from './ProductsCarousel';
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../../assets/footer.png'



export const Home = () => {

  const navigate = useNavigate(); 

  return (
    <section className='containerMax home'>
        <div className="containers">
            
            <section className="banner-home">
                <div className="txt-banner">
                    <h1>NATURAL ORGANIC </h1>
                    <h1>COSMETICS</h1>
                    <p>
                      The natural composition of our cosmetics 
                      does not mask the flaws, but activate  the natural
                      forces of the body for the health and beauty of the skins.
                      There  are no synthetic ingredients  in our cosmetics.   
                    </p>
                    <button  onClick={() => navigate('/catalog')}>SHOP NOW</button>
                </div>
                <img src={ProductBanner} alt="" />
            </section>

            <section className='products-section'>
                <div className="title-product">
                    <hr />
                    <h1>Products</h1>
                    <hr />
                </div>
                <div className="grid-product">
                    <Container>
                      <Row>
                        <Col>
                          <img src={Face} alt="" />
                        </Col>
                        <Col>
                          <div className="txt-grid">
                              <h2>Body Care</h2>
                              <p>
                                Home body care is an integral part of 
                                a beuty ritual,like facial or hair care.
                              </p>
                              <button className='addToCartBttn' onClick={()=> navigate('/catalog')}>VIEW CATALOG</button>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="txt-grid">
                                <h2>Face Care</h2>
                                <p>
                                  Homw face care is an integral part of 
                                  a beuty ritual,like facial or hair care.
                                </p>
                                <button className='addToCartBttn' onClick={()=> navigate('/catalog')}>VIEW CATALOG</button>
                            </div>
                        </Col>
                        <Col>
                          <img src={Body} alt="" />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <img src={Hair} alt="" />
                        </Col>
                        <Col>
                          <div className="txt-grid">
                                <h2>Hair Care</h2>
                                <p>
                                  Home hair care is an integral part of 
                                  a beuty ritual,like facial or hair care.
                                </p>
                                <button className='addToCartBttn' onClick={()=> navigate('/catalog')}>VIEW CATALOG</button>
                            </div>
                        </Col>
                      </Row>
                    </Container>
                </div>
            </section>

            <section className='products-carousel'>
                <div className="title-product">
                    <hr />
                    <h1>Popular Products</h1>
                    <hr />
                </div>
                <div className="carousel-prod">
                <Swiper
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={70}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                breakpoints= {{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 5,
                    spaceBetween: 30
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 6,
                    spaceBetween: 40
                  }
                }}
                
                > 
                
                  {PRODUCTS_SLIDE.map((product) => (
                    <SwiperSlide>
                      <ProductsCarousel  data={product} />
                    </SwiperSlide>
                  ))} 
               
                          
                </Swiper>                
                </div>
            </section>

            <footer className='footer'>
                <div className="l-footer">
                  <img src={Footer} alt="" />
                </div>
                <div className="r-footer">
                    <h1>FORCE OF NATURE IN</h1>
                    <h1>ACTION</h1>
                    <p>
                      Until now, our planet has not created a force <br />
                      more balanced, powerful and eternal than the <br />
                      force of nature. This principle formed the basis of<br />
                      the Pure Line product development.
                    </p>
                    <button  className='addToCartBttn' onClick={()=> navigate('/catalog')}>VIEW CATALOG</button>
                </div>              
            </footer>    

        </div>
    </section>

   
  )
}
