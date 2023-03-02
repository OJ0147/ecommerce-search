import React, { useState, useEffect } from 'react'
import Categories from '../categories/Categories'
import Search from '../search/Search'
import Product from './Product' 
import './ProductList.css'
import {products as productData} from '../products-data' 


const allCategories = [
  "all",
  ...new Set(productData.map((product)=>product.category)),
];

const ProductList = () => {
  const [products, setProducts] = useState(productData)
  const [search, setSearch] = useState("")
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [categories, setCategories] = useState(allCategories);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filterProducts = (category) => {
    if(category === "all"){
      setProducts(productData)
      return;
    }
    const newProducts = productData.filter((product) => product.category === category);
    setProducts(newProducts);
    
  }
  useEffect(() => {
    console.log(allCategories)
    setfilteredProducts(
      products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    )
  },[search, products])
 
  return (
    <>
    <div className="header">
        <header className="container">
            <h1><span>Product</span> Filter</h1>
            <div className='flex-container'>
              <Search inputValue={search} onInputChange={handleSearch} />
              <Categories categories={categories} filterItems={filterProducts} />
            </div>
        </header>
    </div>
    <div className="product-conrainer">
    <div className="products grid-container">
      {filteredProducts.length===0? (
        <h3>Product not found...</h3>
      ):(
        filteredProducts.map((product)=>{
          const {title,id, category, price, img}  = product
          return (
            <div key={id}>
              <Product title={title} price= {price} img={img} />
            </div>
          );
        }
      )
      )}
     
      </div>
    </div>
    </>
  )
}

export default ProductList