import React, {FC} from 'react'
import Home from '../pages/Home'
import Router from '../router/Router';
import { BrowserRouter, Route} from 'react-router-dom';
import Detail from '../pages/Detail'
import Catelog from '../pages/Catelog'
import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';

const Layout: FC = props => {
    return (
       
           <BrowserRouter>
           <div className="container">
            
            <Header/>
           
            <div className="main">
            <ScrollTop/>
            <Router/>
            </div>
           
              <Footer/>
           
           </div>
         </BrowserRouter>
     
    )
}



export default Layout
