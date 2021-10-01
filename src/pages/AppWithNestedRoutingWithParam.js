import React from 'react'
import { BrowserRouter,Route,Link,Switch } from 'react-router-dom'
import Category from './Category'
import Home from './Home'

import Product from './Product'
const AppWithNestedRoutingWithParam = () => {
    return (
        <div>
            <BrowserRouter>
            
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category">Category</Link></li>
                    <li><Link to="/product">Product</Link></li>
                </ul>
            </nav>
            <Switch>
            <Route exact path="/" component={Home}/>
           <Route path="/category" component={Category}/>
           <Route path="/product" component={Product}/>
           <Route path="/:id" 
           render={
               ()=>(
                   <p>I want thie text toshow up for all routes other than / </p>
               )} />
           </Switch>
           </BrowserRouter>
        </div>
    )
}

export default AppWithNestedRoutingWithParam
