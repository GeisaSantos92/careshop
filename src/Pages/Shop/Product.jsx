import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/shop-context';



export const Product = (props) => {
    const { id, productName, price, productImage, desc, desc2} = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];



    // estado para controlar a exibição do modal
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
    console.log('foi')
  };

  const handleModalClose = () => {
    setShowModal(false);
  };




  return (
    <div className='products'>
      <div className="prod-prod">
          <div className="img-prod">
            <img src={productImage} alt="" onClick={handleImageClick}/>
            <p>{productName}</p>
          </div>
          <div className="txt-prod">
            <h5>{productName}</h5>
            <p>{desc2}</p>
            <strong>${price}</strong> 
            <button className='addToCartBttn' onClick={() => addToCart(id)}>
                To Order + {cartItemAmount > 0 && <>({cartItemAmount})</>}
              </button>
        </div>
      </div>
      {showModal && (
        <div className='modalBoxes'>
          <div className='modal-content-boxes'>
            <div className="nameProduct">
                <span className='close' onClick={handleModalClose}>
                &times;
                </span>            
                <h2>{productName}</h2>
                <img src={productImage} alt='' />
            </div>
            <div className="desc">
                <h1>Description</h1>
                <p>{desc}</p>
                <div className="bottons">
                  <h3>${price}</h3>
                  <button className='addToCartBttn' onClick={() => addToCart(id)}>
                      To Order + {cartItemAmount > 0 && <>({cartItemAmount})</>}                  
                  </button>               
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
