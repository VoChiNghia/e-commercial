import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '../component/Breadcrumb'
import Product from '../acesse/fakeData/Product'
import Infinity from '../component/Infinity'
import IProduct from '../interface/IProduct'
import { useDispatch, useSelector } from 'react-redux'
import {lowToHigh,highToLow} from '../app/feature/filterProductSlice'
import { RootState } from '../app/store'
import ProductCartList from '../component/ProductCartList'
const Catelog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
    const dispatch = useDispatch()
    const data = useSelector((state:RootState) => state.filterSort.value)
    
    const [sizeProduct, setSizeProduct] = useState<number>(6)


    const listRef = useRef<HTMLDivElement>(null)
    const blockRef = useRef<HTMLDivElement>(null)
    const iconBlockRef = useRef(null)
    const iconListRef = useRef(null)

   const handleChangeSelect = (e:any):void =>{
       
       if(e.target.value === '1'){
         dispatch(lowToHigh(Product))
       }else if(e.target.value === '2'){
          dispatch(highToLow(Product))
       }
    }

    const handleBlock = () => {
      const refList:any = listRef.current
      const refBlock:any = blockRef.current
      const refIconBlock:any = iconBlockRef.current
      const refIconList:any = iconListRef.current

      refList.classList.remove('active')
      refBlock.classList.add('active')

      refIconList.classList.remove('active')
      refIconBlock.classList.add('active')
    }

    const handleList = () => {
      const refList:any = listRef.current
      const refBlock:any = blockRef.current
      const refIconBlock:any = iconBlockRef.current
      const refIconList:any = iconListRef.current

      refBlock.classList.remove('active')
      refList.classList.add('active')

      refIconBlock.classList.remove('active')
      refIconList.classList.add('active')
      
    }
    const handleSizeProduct = ():void => {
      setSizeProduct(sizeProduct + 6)
    }
    
   
    return (
        <div  className="catelog">

            <Breadcrumb title="Catelog"/>

          <div className="catelog__container">
           <div className="catelog__container__navigation">
                  <h2>SHOP NAVIGATION</h2>
                  <div className="navigation">
                    <div className="navigation__left">
                    <span>{`>`}</span>
                    <span>Men</span>
                    </div>

                    <div className="navigation__right">
                    <i className="fas fa-plus"></i>
                    </div>

                  </div>

                  <div className="navigation">
                    <div className="navigation__left">
                    <span>{`>`}</span>
                    <span>Womens</span>
                    </div>

                    <div className="navigation__right">
                    <i className="fas fa-plus"></i>
                    </div>

                  </div>

                  <div className="navigation">
                    <div className="navigation__left">
                    <span>{`>`}</span>
                    <span>Shop</span>
                    </div>

                    <div className="navigation__right">
                    <i className="fas fa-plus"></i>
                    </div>

                  </div>

                  <div className="navigation">
                    <div className="navigation__left">
                    <span>{`>`}</span>
                    <span>Office wear</span>
                    </div>

                    <div className="navigation__right">
                    <i className="fas fa-plus"></i>
                    </div>

                  </div>

                  <div className="navigation">
                    <div className="navigation__left">
                    <span>{`>`}</span>
                    <span>Product</span>
                    </div>

                    <div className="navigation__right">
                    <i className="fas fa-plus"></i>
                    </div>

                  </div>
            </div>

            <div className="catelog__container__content">
              <div className="content-name">
                <h1>Product</h1>
              </div>
              <div className="content-filter">
                <div className="content-filter__icon">
                <i ref={iconBlockRef} className="fas fa-th active" onClick={handleBlock}></i>
                <i ref={iconListRef} className="fas fa-th-list" onClick={handleList}></i>
                </div>

                <div className="content-filter__sort">
                  <p>Sort By:</p>
                 <select id="sort" onChange={(e) => handleChangeSelect(e)}>
                   <option value="">Default</option>
                   <option value="1">Price (low - high)</option>
                   <option value="2">Price (high - low)</option>
                 </select>
                </div>
              </div>

                <div className="content-product">
                <div ref={blockRef} className="content-product__block active">
                {
                <Infinity Product={data}/>
                }
                </div>
                <div ref={listRef}  className="content-product__list">
                  {
                    data.slice(0, sizeProduct).map((item:IProduct, index:any) => (
                      <ProductCartList key={index} product={item} />
                    ))
                  }
                  <button onClick={handleSizeProduct}>More</button>
                </div>
                </div>
              
            </div>
         </div>
                        
         </div>
    )
}



export default Catelog