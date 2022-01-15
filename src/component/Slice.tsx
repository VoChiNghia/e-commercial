import React,{FC, useState,useCallback, useEffect} from 'react'
import {ISliceData} from '../interface/ISlider'

interface ISlider {
    sliderData: ISliceData[]
  
}


const Slice = ({sliderData}: ISlider) => {
 
    const [active, setActive] = useState<number>(1)


    const handlePrevious = (): void => {
        setActive(active - 1 === -1 ? 2 : active - 1)
    }

    const handleNext = ():void => {
        setActive(active + 1 === 3 ? 0 : active +  1)
    }
   useEffect(() => {
      var timeOut = setInterval(() => {
        handleNext()
       },3000)

       return () => {
        clearInterval(timeOut)
    }
   },[handleNext])
    

    return (
        <div className='slice'>

          {sliderData.map((item:ISliceData,index:number) =>(
              <div key={index} className={`slice__container ${index === active ? 'active' : ''} `}>

              <div className="slice__container__info">
                   <h2>{item.title}</h2>
                   <span>{item.description}</span>
                   <button>Buy now</button>
               </div>
              <div className="slice__container__img">
                  <img src={item.img} alt="" />
              </div>
   
              
              </div>

          ))
          
          }
           
           <div className="slice__control">
              <i className="fas fa-chevron-left control-left" onClick={handlePrevious}></i>
              <i className="fas fa-chevron-right control-right" onClick={handleNext}></i>
              </div>

        </div>
    )
}



export default Slice
