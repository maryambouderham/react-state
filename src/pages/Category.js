import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({match}) => {
    return (
        <div>
            {console.log(match)}
            <p>Liste des categories:</p>
            <ul>
                <li><Link to="/category/shoes">Shoes</Link></li>
                <li><Link to={`${match.url}/boots`}>Boots</Link></li>
                <li><Link to={`${match.url}/basckets`}>Basckets</Link></li>
            </ul>
            <Route path={`${match.path}/:name`} component={CategoryDetails}/>
        </div>
    )
}

export default Category
