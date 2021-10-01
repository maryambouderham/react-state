import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Category from './Category'
import Home from './Home'
import Login from './Login'

import Product from './Product'

const AppBrowserRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/product" component={Product}/>
            <Route path="/login" component={Login}/>
            </BrowserRouter>
        </div>
    )
}

export default AppBrowserRouter
