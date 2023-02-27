import React from 'react'
import './Footer.css'
import Logo from '../assets/logo2.png' 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom'
import { InstagramLogo, FacebookLogo, TwitterLogo, PinterestLogo } from 'phosphor-react';

export const Footer = () => {

  const navigate = useNavigate(); 
  return (
    <section className='rodape containerMax'>
      <div className="containers container-rodape">
          <Container >
              <Row>
                <Col>
                  <img onClick={() => navigate('/')} src={Logo} alt="" />
                  <span>&copy; 2022 - All Rights Reserved</span>
                </Col>
                <Col>
                  <ul>
                    <Link to='/'>Home</Link> | <Link to='/catalog'>Catalog</Link> |<Link to='/about  '>About Us</Link> |  <Link to='/contact'>Contact</Link>  <br /><br />
                  </ul>
                  <div className="icons">
                    <Link to='https://instagram.com' target='_blank'><InstagramLogo size={25} /></Link>
                    <Link to='https://facebook.com' target='_blank'><FacebookLogo size={25} /></Link>
                    <Link to='https://twitter.com' target='_blank'><TwitterLogo size={25} /></Link>
                    <Link  to='https://pinterest.com' target='_blank'><PinterestLogo size={25} /></Link>
                  </div>
                </Col>
                <Col>
                  <div className="call">
                      <button className='call-btn' onClick={()=> navigate('/contact')}>FREE CALL</button>
                      <span>8-800-000-000-00</span>
                  </div><br /><br />
                  <div>Designed with love specially for you !</div>
                </Col>
              </Row>
          </Container>
      </div>
    </section>
  )
}
