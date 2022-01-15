import React from 'react'
import { Link } from 'react-router-dom'


const Footer:React.FC = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__info">
                    <h5>CONTACT INFO</h5>
                    <div className="footer__container__info__content">
                    <i className="fas fa-location-arrow"></i>
                    <p>71 Pennington Lane Vernon Rockville,CT 06066</p>
                    </div>

                    <div className="footer__container__info__content">
                    <i className="fas fa-phone-alt"></i>
                    <p>0123-456-789</p>
                    </div>

                    <div className="footer__container__info__content">
                    <i className="fas fa-blender-phone"></i>
                    <p>0123-456-789</p>
                    </div>

                    <div className="footer__container__info__content">
                    <i className="fas fa-envelope"></i>
                    <p>Nghiakg11432@gmail.com</p>
                    </div>
                </div>

                <div className="footer__container__info">
                    <h5>INFORMATION</h5>
                    <Link to='/'>About Us</Link>
                    <Link to='/'>Delivery Information</Link>
                    <Link to='/'>Privacy Policy</Link>
                    <Link to='/'>Terms and Conditions</Link>
                    <Link to='/'>Site Map</Link>
                </div>

                <div className="footer__container__info">
                    <h5>EXTRAS</h5>
                    <Link to='/'>Brands</Link>
                    <Link to='/'>Gift Certificates</Link>
                    <Link to='/'>Affiliate</Link>
                    <Link to='/'>Specials</Link>
                    <Link to='/'>Contact Us</Link>
                </div>

                <div className="footer__container__info">
                    <h5>OUR NEWSLETTER</h5>
                    <p>Sign up for our newsletter to get the latest news, announcements and special.</p>
                    <input type="text" placeholder="Enter Email Address" />
                    <button>SUBPRISE</button>
                </div>
               
            </div>

            <div className="footer__bottom">
                   <div className="footer__bottom__container">
                   <div className="footer__bottom__container__left">
                        <p>Powered By OpenCart Your Store © 2021</p>
                    </div>
                    <div className="footer__bottom__container__right">
                        <ul>
                            <li>
                                <Link to='/'>
                                <i className="fab fa-facebook"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                   </div>
                </div>
        </div>
    )
}



export default Footer
