import React from 'react'
import { Link } from 'react-router-dom'
import IProduct from '../interface/IProduct'

interface Props{
    product:IProduct
}

const ProductCartList = ({product}:Props) => {
    return (
        <div className="product-list">
              <Link to={`/detail/${product.slug}`}>
               <div className="product-list-cart">
                    <div className="product-list-cart__container">
                <div className="product-list-cart__container__img">
                    <img src={product.image01} alt={product.title} />
                    <button>Add to cart</button>
                   
                </div>
                <div className="product-list-cart__container__info">
                    <span>{product.title}</span>
                    <div className="rating__start">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        </div>
                    <p>{product.price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</p>
                </div>
               
            </div>
               </div>
              </Link>
               
           
         
        </div>
    )
}



export default ProductCartList
