import React, {FC, useEffect, useState} from 'react'
import Slice from '../component/Slice'
import { ISliceData } from '../interface/ISlider'
import sliderData from '../acesse/fakeData/Slider'
import imgBanner1 from '../acesse/images/sub-banner1.jpg'
import imgBanner2 from '../acesse/images/sub-banner2.jpg'
import imgBanner3 from '../acesse/images/sub-banner3.jpg'
import ProductCart from '../component/ProductCart'
import Products from '../acesse/fakeData/Product'
import Product from '../acesse/fakeData/Product'
import IProduct from '../interface/IProduct'
import Post from '../component/Post'
import post from '../acesse/fakeData/post'
import IPost from '../interface/IPost'
const Home: FC = props => {
  


 
    return (
        <div className="home">
          {/* {
              // sliderData.map((item: ISliceData, index: number) =>(
              //   <Slice key={index} index={index} sliderData={item}/>
              // ))
              <Slice sliderData={sliderData}/>
          } */}
          <img src="https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/banners/main-banner1-1920x650.jpg" alt="" />
            <div className="promotion-box">
              <div className="promotion-box__container">
                <div className="promotion-box__container__item">
                <i className="fas fa-truck"></i>
                <div className="promotion-box__container__item__name">
                  <h3>FREE SHIPPING</h3>
                  <span>Order Over $99</span>
                </div>
                </div>

                <div className="promotion-box__container__item">
                <i className="fas fa-exchange-alt"></i>
                <div className="promotion-box__container__item__name">
                  <h3>MONEY BACK</h3>
                  <span>30 Days Return</span>
                </div>
                </div>

                <div className="promotion-box__container__item">
                <i className="fas fa-headset"></i>
                <div className="promotion-box__container__item__name">
                  <h3>24/7 SUPPORT</h3>
                  <span>Dedicated Support</span>
                </div>
                </div>
              </div>
            </div>


            <div className="subbaner-section">
              <h1>SHOP BY BRAND</h1>
              <div className="subbaner-section__container">
               <div className="subbaner-section__container__item">
               <div className="banner">
                <img src={imgBanner1} alt="" />
                <p>Fashion</p>
                </div>
               </div>

               <div className="subbaner-section__container__item">
                <div className="banner">
                <img src={imgBanner2} alt="" />
                <p>Accessories</p>
                </div>
               </div>

               <div className="subbaner-section__container__item">
               <div className="banner">
                <img src={imgBanner3} alt="" />
                <p>Men</p>
                </div>
               </div>

              </div>
            </div>
            
              <div className="product-item">
               <div className="product-item__name">
               <h3>TOP PRODUCTS</h3>
                <div className="product-item__name__selection">
                  <span>FEATURE</span>
                  <span>SPECIAL</span>
                  <span>BESTSELLER</span>
                </div>
               </div>
              {
                Product.slice(1 , 5).map((item: IProduct,index: number) =>(
                  <ProductCart product={item} key={index}/>
                ))
                
              }
              </div>
          
             <div className="parallax-banner">
               <div className="parallax-banner__bg">
                <div className="parallax-banner__bg__container">
                <div className="parallax-banner__bg__container__content">
                 <img src="https://opencart.mahardhi.com/MT01/adi/image/catalog/logo.png" alt="" />
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                 <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, like Aldus PageMaker including versions of Lorem Ipsum.</p>
                 <button>Shop Now</button>
               </div>
                </div>
               </div>
             </div>

             <div className="product-item">
               <div className="product-item__name">
               <h3>LATEST</h3>
               
               </div>
              {
                Product.slice(5 , 9).map((item: IProduct,index: number) =>(
                  <ProductCart product={item} key={index}/>
                ))
              } 
              
              </div>


              <div className="customer">
                <div className="customer__container">
                  <h3>OUR CUSTOMER SAY</h3>
                  <img src="https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/testimonial/1-150x150.jpg" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, eros a faucibus condimentum, libero turpis ornare nisl, a laoreet leo tortor non dui. Maecenas ac congue mi, quis lobortis nunc. Aliquam erat volutpat. Nunc porttitor tempor sapien, quis egestas purus laoreet ut. Pellentesque aliquet tellus erat. Sed eu nibh leo. Donec sagittis nulla at tempor venenatis.</p>
                  <span> - ChiNghia</span>
                </div>
              </div>

            <div className="post-section">
              <h2>LEAST POST</h2>
            <div className="post-wrap"> 
             {
                post.map((item:IPost,index:number) => (
                  <Post key={index} post={item}/>
                ))
              }
             </div>
            </div>

            <div className="partners">
              <div className="partners__container">
                <h2>OUR PARTNERS</h2>
                <div className="partners__container__logo">
                  <img src="https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/brand/02-170x70.jpg" alt="" />
                  <img src="https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/brand/01-170x70.jpg" alt="" />
                  <img src="https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/brand/03-170x70.jpg" alt="" />
                  <img src="https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/brand/05-170x70.jpg" alt="" />
                  <img src="https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/brand/04-170x70.jpg" alt="" />
                </div>
              </div>
            </div>
        </div>
    )
}



export default Home