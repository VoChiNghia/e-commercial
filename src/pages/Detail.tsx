import React, {FC, useEffect, useRef, useState} from 'react'

import IProduct from '../interface/IProduct'
import Products from '../acesse/fakeData/Product'
import { Link, useHistory, useParams } from 'react-router-dom'
import ProductCart from '../component/ProductCart'
import Breadcrumb from '../component/Breadcrumb'
import Product from '../acesse/fakeData/Product'
import {addToCart} from '../app/feature/cartSlice'
import { useDispatch } from 'react-redux'
import {addComma} from '../until/AddComma'

const Detail = () => {
    document.title = 'Detail'
   useEffect(() => {
    window.scrollTo(0, 0)
   }, [])

    const dispatch = useDispatch()
    const history = useHistory()

    const {slug}:any = useParams<string>()
    const [color, setColor] = useState<string>('')
    const [size, setSize] = useState<string>('')
    const [quantity, setQuantity] = useState<number>(1)
    const sizeRef = useRef<HTMLDivElement>(null)
    
    const check = ():boolean => {
        if(size.length === 0){
            alert('pick a size')
            return false
        }if(color.length === 0){
            alert('pick a color')
            return false
        }
        return true
    }
   
    const getProductBySlug = (slug:string) => {
        return Products.find(item => item.slug === slug)
    }

    const product = getProductBySlug(slug)
    
    const addCart = ():void => {
        const action = {
            slug:product?.title,
            size: size,
            color: color,
            price: product?.price,
            quantity: quantity,
            title: product?.title,
            img:product?.image01
        }
       if(check()){
        dispatch(addToCart(action))
         
        alert("success")
        history.push('/cart')
       }
    }


    const goToCart = ():void => {
        history.push('/cart')
    }
    
    
    const handleSize = ():void => {
        const size = sizeRef.current
        size?.classList.toggle('active')
        console.log(size)
    }

    


    return (

        <div className="detail">
             
                  
                    
                      <Breadcrumb title={`${product?.title}`} />
                
                
             
        <div className="detail-product__main">
          {
             
                <div className="detail-product__main__content">
                <div className="detail-product__main__content__img">
                  <img src={product?.image01} alt="" />
                  <div className="detail-product__main__content__img__list">
                      <img src={product?.image02} alt="" />
                  </div>
                </div>
                <div className="detail-product__main__content__info">
                    <h3>{product?.title}</h3>
                    <div className="rating">
                        <div className="rating__start">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        </div>
                        <div className="rating__review">
                            <span>0 review</span>
                        </div>
                    </div>
                   <div className="price">{addComma(product?.price)}</div>
                    
                    <div className="detail-product__color">
                        <p>Color</p>
                        {
                            product?.colors.map((item:string,index:number) => (
                                <div key={index} className="detail-product__color__content">
                                    <div onClick={() => setColor(item)} className={`detail-product__color__content__item ${color === item ? 'active' : ''}`}>{item}</div>
                                </div>
                            ))
                        }
                    </div>
                    
                    <div className="detail-product__size">
                        <p>Size</p>
                        {
                            product?.size.map((item:string,index:number) => (
                                <div key={index} className="detail-product__size__content">
                                    <div onClick={() => setSize(item)} className={`detail-product__size__content__item ${size === item ? 'active' : ''}`}>{item}</div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="detail-product__quantity">
                        <p>Quantity</p>
                        <div>
                        <i className="fas fa-minus" onClick={() => (quantity === 1 ? 1 : setQuantity(quantity - 1))} ></i>
                        <span>{quantity}</span>
                        <i className="fas fa-plus" onClick={() => setQuantity(quantity + 1)}></i>
                        </div>
                    </div>
                    
                    <div className="detail-product__btn">
                       
                            <button onClick={addCart} >Add Cart</button>
                            <button onClick={goToCart}>Go to Cart</button>
                   
                    </div>


                </div>

                
               
            </div>
              
          }
        </div>

        <div className="detail-product__description">
                    <div className="detail-product__description__title">
                        <h3>DESCRIPTION</h3>
                        <h3>REVIEW</h3>
                    </div>
                    <div className="detail-product__description__content">
                        {
                           
                                <p>{product?.description}</p>
                              
                        
                        }
                    </div>
                </div>

        <div className="detail-product__boottom" onClick={() => window.scrollTo(0, 0)}>

               <h2>RELATED PRODUCTS</h2>
               {
                Product.slice(1 , 5).map((item: IProduct,index: number) =>(
                  <ProductCart product={item} key={index}/>
                ))
                
              }
        </div>

        </div>
       
        
    )
}



export default Detail