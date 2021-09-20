import React from 'react'
import MovieCardList from './MovieCardList'
import Movie from '../model/Movie-model'
import img1 from '../images/poster.jpg'

const LIST_MOVIES = [
    
    new Movie(1,"titre 1","description du film 1",img1,6),
    new Movie(2,"titre 2","description du film 2","https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-movie-poster-template-bf66c91406dcc58797e8135a5d201178_screen.jpg?ts=1561439822",6),
    new Movie(3,"titre 3","description du film 3","https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-movie-poster-template-bf66c91406dcc58797e8135a5d201178_screen.jpg?ts=1561439822",6)
]
const MovieCard = () => {
  const deleteMovie = (id)=>{
    LIST_MOVIES.forEach(c=>{
        if(c.id==id) c.destroy();
    })
    
}
    return (
        <div>
                
<header>
  <div class="collapse bg-dark" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Contact</h4>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Follow on Twitter</a></li>
            <li><a href="#" class="text-white">Like on Facebook</a></li>
            <li><a href="#" class="text-white">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#" class="navbar-brand d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        <strong>Album Movies</strong>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>

<main>

  
<MovieCardList
OnClickDeleteMovie= {(id)=>deleteMovie(id)}
listMovies ={LIST_MOVIES} />
 

</main>

<footer class="text-muted py-5">
  <div class="container">
    <p class="float-end mb-1">
      <a href="#">Back to top</a>
    </p>
    <p class="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
    <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p>
  </div>
</footer>


    <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    )
}

export default MovieCard