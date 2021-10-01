import React from 'react'
import { HashRouter,Route } from 'react-router-dom'
import Category from './Category'
import Home from './Home'
import Login from './Login'
import Product from './Product'
const AppHashRouter = () => {
    return (
        <div>
            <HashRouter hashType='noslash'>
            <Route exact path="/" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/product" component={Product}/>
            <Route path="/login" component={Login}/>
            </HashRouter>
        </div>
    )
}

export default AppHashRouter
