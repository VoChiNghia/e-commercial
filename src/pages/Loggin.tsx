import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import validator from '../validator/validator'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';





const Loggin = () => {
    document.title = 'Loggin'

   

  return(
  <div className="loggin">

      <div className="loggin__container">
        <div className="loggin__container__info">
            <h2>
            Hãy đăng ký
            để có ưu đãi
            đặc biệt
            từ chúng tôi
            </h2>
        </div>
        <div className="loggin__container__form">
            <div className="loggin__container__form__title">
                <h3>Sign in</h3>
                <p>Wellcom to my website</p>
            </div>
            <div className="loggin__container__form__input">
                
                <div className="loggin__container__form__input__group"> 

                <div className="form-group">
                <input type="text"  className='input-email' placeholder="Enter email or phone" />
                <span className="error"></span>
                </div>

                <div className="form-group">
                <input type="password" className='input-password'  placeholder="Enter password" />
                <span className="error"></span>
                </div>

                </div>
                <p>Forgot password?</p>
                <button>Loggin</button>
                <p>or</p>
                <div className='loggin__container__form__input__icon'>
                <i className="fa-brands fa-google"></i>
                <i className="fa-brands fa-facebook-f"></i>
              
                </div>
                <p>Bằng cách tiếp tục bạn đã Đồng ý với <strong>Điều khoản dịch vụ</strong> và
                 <strong> Chính sách bảo mật</strong></p>
            </div>
            <div className="loggin__container__bottom">
            Bạn chưa có tài khoản?  <Link to="/register"><strong>Đăng ký</strong></Link> ngay
            </div>
        </div>
      </div>
    
  </div>)
};



export default Loggin;
