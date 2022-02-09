import React,{FC, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { RootState } from '../app/store'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const Header:FC = props => {
    document.title = 'Home'

    const profileData = useSelector((state:RootState) => state.profile.value)

    
    const menuRef = useRef<HTMLDivElement>(null)  
    const headerRef = useRef<HTMLDivElement>(null)  
    const handleMenuClick = (): void => {
      const menu: any = menuRef.current
      menu.classList.toggle('active')
    }
  useEffect(() => {
    window.addEventListener('scroll' ,() => {
      const header: any = headerRef.current
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){

      header.classList.add('shrink')
      }else{
        header.classList.remove('shrink')
      }
    })
  }, [])

  const menuToggle = () => {
    const menu: any = menuRef.current
    menu.classList.remove('active')
  }
  

    return (
       <div className="header" >
        
            <div className="nav-contact">
          <div className="nav-contact__left">
          <i className="fas fa-phone-alt"></i>
          <span>Free Support: 123456789</span>
          </div>
          <div className="nav-contact__right">
           {
             profileData ?
             
             <div className="nav-contact__right__profile">
               <img src={profileData.photo} alt="" />
               
             </div> : 
             
             <div className="nav-contact__right__dropdown account">
             <i className="fas fa-user"></i>
             <span>My Account</span>
             <i className="fas fa-angle-down"></i>
 
             <div className="language-dropdown">
              <Link to="/loggin"> <p>Sign In</p></Link>
              <Link to="/register"> <p>Sign Up</p></Link>
               
             </div>
             </div>
           }

            <div className="nav-contact__right__dropdown currency">
            <i className="fas fa-dollar-sign"></i>
            <span>Currency</span>
            <i className="fas fa-angle-down"></i>
            </div>

            <div className="nav-contact__right__dropdown language">
            <i className="fas fa-globe"></i>
            <span>Language</span>
            <i className="fas fa-angle-down"></i>

            <div className="language-dropdown">
              <p>VietNam</p>
              <p>English UK</p>
            </div>

            </div>


            <div className="nav-contact__right__dropdown">
           
            <span>Contact us</span>
           
            </div>

          </div>
        </div>

        <div className="nav-link" ref={headerRef}>
            <div className="nav-link__logo">
               <img src="https://opencart.mahardhi.com/MT01/adi/image/catalog/logo.png" alt="" />
            </div>
            <div className="nav-link__content">
                <Link  to="/">HOME</Link>
                <Link style={{color: "rgb(238, 227, 227)",cursor:"not-allowed"}} to="/catelog">MEN</Link>
                <Link style={{color: "rgb(238, 227, 227)",cursor:"not-allowed"}} to="/catelog">WOMENS</Link>
                <Link to="/catelog">SHOP</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/catelog">PRODUCT</Link>
                <Link to="/cart">CART</Link>
              
            </div>
            
            <div className="nav-link__right">

            <div className="nav-link__menu" onClick={handleMenuClick}>
            <i className="fas fa-bars"></i>
            </div>
                <div className="nav-link__right__icon">
                <i className="fas fa-search"></i>
                </div>

                <div className="nav-link__right__icon">
                <Link to='/cart'><i className="fas fa-shopping-cart"></i></Link>
                </div>
            </div>
        </div>

        <div ref={menuRef} className="nav-link__content__mobile">
                <Link onClick={menuToggle} to="/">HOME</Link>
                <Link onClick={menuToggle} to="/">MEN</Link>
                <Link onClick={menuToggle} to="/">WOMENS</Link>
                <Link onClick={menuToggle} to="/catelog">SHOP</Link>
                <Link onClick={menuToggle} to="/">OFFICE WEAR</Link>
                <Link onClick={menuToggle} to="/catelog">PRODUCT</Link>
                <Link onClick={menuToggle} to="/blog">BLOG</Link>
                <Link onClick={menuToggle} to="/">EXIT</Link>
            </div>
       </div>
        
    )
}



export default Header
