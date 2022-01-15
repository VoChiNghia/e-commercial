import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../acesse/fakeData/Product'
import IProduct from '../interface/IProduct'
interface Props{
    product:IProduct
}

const ProductCart = ({product}: Props) => {
    
    return (
        <div className="product">
              <Link to={`/detail/${product.slug}`}>
               <div className="product-cart">
                    <div className="product-cart__container">
                <div className="product-cart__container__img">
                    <img src={product.image01} alt={product.title} />
                    <img src={product.image02} alt={product.title} />
                    <button>Add to cart</button>
                   
                </div>
                <div className="product-cart__container__info">
                    <span>{product.title}</span>
                    <p>{product.price}</p>
                </div>
               
            </div>
               </div>
              </Link>
               
           
         
        </div>
    )
}



export default ProductCart
