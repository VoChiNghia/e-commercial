import React, {FC} from 'react'

import { Route, Switch } from 'react-router-dom'
import Catelog from '../pages/Catelog'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Blog from '../pages/Blog'
import Loggin from '../pages/Loggin'
import Register from '../pages/Register'

const Router = () => {
    return (
        <div className="app">
          <Switch>
            <Route  path="/loggin" component={Loggin}/>
              <Route  path="/register" component={Register}/>
              <Route path="/detail/:slug" component={Detail}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/catelog" component={Catelog}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/" component={Home}/>
          </Switch>
            
        </div>
    )
}



export default Router