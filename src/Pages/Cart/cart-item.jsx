import React, { useContext} from 'react'
import { ShopContext } from '../../context/shop-context'

export const CartItem = (props) => {

  const { id, productName, price, productImage, desc} = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  
  const itemTotal = (cartItems[id] * price).toFixed(2);

  return (
    <div className="cartItemBox">
      <div className='cartItem'>
          <div className="product-cart">
            <div className="image-cart">
              <img src={productImage} alt="" />
            </div>
            <div className="description">           
                <b>{productName}</b> 
                <span>{desc}</span>           
            </div>
          </div>
          <p className='priceCart'>${price}</p>
          <div className="countHandler">
              <button onClick={() => removeFromCart(id)}>-</button>
              <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
              <button onClick={() => addToCart(id)}>+</button>
          </div>      
          <p className='totalUnit'>{itemTotal}</p>
      </div>
      <hr className='hrCart'/>
    </div>
  )
}