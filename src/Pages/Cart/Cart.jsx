import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import './Cart.css'
import { useNavigate } from 'react-router-dom'


export const Cart = () => {
    const { cartItems, getTotalCartAmount, clearCart} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

  return (
    <div className="containerMax">
        <div className='cart containers'>
            <div className="title-product">
                <hr />
                <h1>Order</h1>
                <hr />
            </div>
            <div className="boxes-cart">
                    <span>Order</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Amount</span>               
            </div>
            <div className="cartItems">
                {
                    PRODUCTS.map((product) => {
                        if(cartItems[product.id] !== 0){
                            return <CartItem data={product}/>
                        }
                    })
                }
            </div>
            {totalAmount > 0 ? (
                <div className="checkout">
                    <div className="totalCheck">
                        <div className="discount">
                            <label htmlFor="">Discount code</label>
                            <input type="text" />
                            <button className='addToCartBttn'>APPLY</button>
                        </div>
                        <div>
                            <strong>Total: ${totalAmount}</strong> <br />
                        </div>
                    </div>
                    <div className="buttons-cart">
                        <div>
                            <button className='addToCartBttn' onClick={() => navigate("/catalog")}>Continue Shopping</button>                        
                            <button className='addToCartBttn' onClick={clearCart}>Clear cart</button>
                        </div>
                       <div>
                            <button className='btnOrder'>ORDER</button>
                       </div>
                    </div>
                </div>
                
            ): (
                <h1 className='empty'>Your Cart is Empty</h1>
            )
            }
        </div>
    </div>
  )
}
