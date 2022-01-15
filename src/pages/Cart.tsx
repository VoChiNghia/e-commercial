import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../app/feature/cartSlice'
import { RootState } from '../app/store'
import { addComma } from '../until/AddComma'


const Cart = () => {
    interface IDataCart {
        slug:string
        size: string,
        color: string,
        price: string,
        quantity: number,
        id: number
        title: string,
        img:string
    }
    const dispatch = useDispatch()
    const dataCart = useSelector((state:RootState) => state.cartSlice.value)
    const [totalPrice, setTotalPrice] = useState<number>(0);
   
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    useEffect(() => {
        setTotalPrice(dataCart.reduce((total:number,curentValue:IDataCart) => total += Number(curentValue.price),0))
    }, [dataCart])
                       
   
     const handleRemove = (data:IDataCart) => {
           
            dispatch(removeItem(data.id))
     }
 

   
    return (
        <div className="cart">
          {
              dataCart.length > 0 ? (
                <div className="cart-wrap">
                <ul className="cart__list">
                    {
                        dataCart.map((data:IDataCart, index:number) => (
                            <li key={index} className="cart__list__item">
                                <div className="cart__list__item__container">   
    
                                 <div className="cart__list__item__container__img">
                                 <img src={data.img} alt="" />
                                 </div>
                                
                                 <div className="cart__list__item__container__info">
                                    <h3>{data.title}</h3>
                                    <span>Size: {data.size} Color: {data.color}</span><br/>
                                    <span>quantity: {data.quantity}</span>
                                    <p>{addComma(data.price)}</p>
                                </div>
    
                                </div>
                                <i className="fas fa-times" onClick={() => handleRemove(data)}></i>
                            </li>
                        ))
                    }
                </ul>
    
                <div className="cart__section-bottom">
                   <p>Total:<span>{addComma(totalPrice.toString())}</span></p>
                    <button>Check Out</button>
                </div>
                </div>
              ): <p className="cart__no-item">You have no product</p>
          }
        </div>
    )
}


export default Cart
