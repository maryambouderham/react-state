import React from 'react'

import MovieCardItem from './MovieCardItem'



const MovieCardList = (props) => {
    return (
        <div>
            <div class="album py-5 bg-light">
            <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          
            {props.listMovies.map(movie => 
                <MovieCardItem 
                    
                    key={movie.id}
                    title={movie.title} 
                    description={movie.description}
                    posterURL={movie.posterURL} 
                    rating={movie.rating} 
                    OnClickDeleteMovie={()=>props.OnClickDeleteMovie(movie.id)}
                    
                    />)}
            </div>
            </div>
            </div>
            <div className="mx-auto" style={{width: 200}}>
           
   
            <button  type="button" className="btn btn-success m-5 ">add new movie</button>
  

            </div>

        </div>
    )
}

export default MovieCardList
