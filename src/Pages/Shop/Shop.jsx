import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { Product } from './Product';
import './Shop.css';

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate();

  const productsToDisplay = selectedCategory
    ? PRODUCTS.filter(product => product.category === selectedCategory)
    : PRODUCTS;

  return (
    <div className="containerMax catalog ">        
        <div className='shop containers'>
          <div className="banner-catalog">
            <h1>THE MOST SIGNIFICANT </h1>
            <h1>INOVATIONS</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repellendus corrupti consectetur conse <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repellendus corrupti 
            </p>
          </div>
          <div className="title-product">
              <hr />
              <h1>Catalog</h1>
              <hr />
          </div>
          <div className="categoryFilter">
              <a onClick={() => setSelectedCategory(null)}>All</a>
              <a onClick={() => setSelectedCategory('body')}>Body</a>
              <a onClick={() => setSelectedCategory('hair')}>Hair </a>
              <a onClick={() => setSelectedCategory('face')}>Face</a>          
          </div> 
          <div className="product">
            {productsToDisplay.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
      </div>
    </div>
  );
}