import React from 'react'
import './Product.css'


const Product = ({img, title, price}) => {
  return (
    <div className='product card ' >
      <div className="image-wrapper">
        <img src={img} alt="art product1" />
      </div>
      
      <div className='product-detail'>
        <h3>{title}</h3>
        <div className="pricetag">
          <p>${price}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product