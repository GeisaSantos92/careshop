import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import 'swiper/css';
import 'swiper/css/pagination';


export const ProductsCarousel = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { id, productName, price, productImage, desc2 } = props.data;
  const cartItemAmount = cartItems[id];




  return (
    <>
      <div className="img-slider" >
        <img src={productImage} alt="" />
      </div>
      <div className="txt-slider">
        <h4>{productName}</h4>
        <span>{desc2}</span>
        <br />
        <strong>${price}</strong>
        <br />
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
          + Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </>
  );
};
