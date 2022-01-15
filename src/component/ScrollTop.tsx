import React, { useEffect, useRef } from 'react'


const ScrollTop = () => {

  
    const scroll = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const scrollDiv = scroll.current
       window.addEventListener('scroll',()=>{
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            scrollDiv?.classList.add('active')
          
        }else{
            scrollDiv?.classList.remove('active')

        }
       })
      
    }, [])

   const handleClick = ():void => {
        window.scrollTo(0,0)
   }

    return (
        <div ref={scroll} className={`scroll-top `} onClick={handleClick}>
            <div className="scroll-top__content">
            <i className="fas fa-angle-double-up"></i>
            </div>
        </div>
    )
}



export default ScrollTop
