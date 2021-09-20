import React from 'react'

const MovieCardItem = (data) => {
    return (
        <div class="col">
      <div className="card " style={{width: '18rem'}}>


       <img src={data.posterURL} className="card-img-top" alt="..." />


          <div class="card-body">
          <h5 class="card-title">{data.title}</h5>
            <p class="card-text">{data.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button onClick={data.OnClickDeleteMovie} type="button" class="btn btn-danger">delete</button>
              </div>
              <small class="text-muted">{data.rating}</small>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MovieCardItem
