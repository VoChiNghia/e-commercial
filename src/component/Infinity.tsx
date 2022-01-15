import React, {FC, useEffect, useRef, useState}from 'react'
import PropTypes from 'prop-types'
import IProduct from '../interface/IProduct'
import ProductCart from './ProductCart'
interface IProps{
    Product:IProduct[]
}
const Infinity = ({Product}:IProps) => {
    const perLoad:number = 6;
    const   [data, setData]  = useState(Product.slice(0,perLoad))
    const [load, setLoad] = useState<boolean>(true)
    const catelogRef = useRef<HTMLDivElement>(null)
    const [index, setIndex] = useState<number>(0)
  
  
    useEffect(() => {
      setData(Product.slice(0 , perLoad))
      setIndex(1)
  }, [Product])
  
    useEffect(() => {
      const ref:any = catelogRef.current
      
     window.addEventListener("scroll", () => {
       if(catelogRef && ref){
        if(window.scrollY + window.innerHeight >= ref.clientHeight + 200){
          setLoad(true)
        }
       }
     })
    },[catelogRef])
  
      useEffect(() => {
        const getItem = () => {
          const page = Math.floor( Product.length / perLoad)
          const maxIndex = Product.length % perLoad === 0 ? page : page + 1
          if(load && index <= maxIndex){
            const start = perLoad * index
            const end = perLoad + start
  
            setData(data.concat(Product.slice(start, end)))
            setIndex(index + 1)
          }
        }
        getItem()
        setLoad(false)
      },[Product, load, index, data])
    return (
        <div ref={catelogRef}>
            {
                data.map((item: IProduct,index: number) =>(
                  <ProductCart product={item} key={index}/>
                ))
                
              }
        </div>
    )
}



export default Infinity
