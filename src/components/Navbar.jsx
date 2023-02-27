import React, { useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import {  ShoppingCart } from 'phosphor-react'
import './Navbar.css'
import { ShopContext } from '../context/shop-context'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.PNG'


export const NavbarNav = () => {  

  const { cartItems} = useContext(ShopContext);  

  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };


  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };


  return (
    <div className=' containerMax'>
        <Navbar  className='containers navbar' expand="lg">
            <Container className='links ' >
                <Link to='/' ><img className='logo' src={Logo} alt="" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ">
                  <Link to='/'className={activeLink === '/' ? 'active' : ''} onClick={() => handleClick('/')}>Home</Link>
                  <Link to='/catalog'className={activeLink === '/catalog' ? 'active' : ''} onClick={() => handleClick('/catalog')}>Catalog</Link>    
                  <Link to='/about' className={activeLink === '/about' ? 'active' : ''} onClick={() => handleClick('/about')}>About Us</Link>     
                  <Link to='/contact' className={activeLink === '/contact' ? 'active' : ''} onClick={() => handleClick('/contact')}>Contact</Link>
                  <div className="icones">                     
                    <Link to='/cart'>
                        <ShoppingCart size={25}/> 
                        <span className='cart-item'>{getTotalCartItems()}</span>
                    </Link>  
                  </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
