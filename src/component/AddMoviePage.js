import React from 'react'

const AddMoviePage = () => {
    return (
        <div>
           <div className="input-group mb-3">
           <span className="input-group-text" id="inputGroup-sizing-default">TITLE</span>
           <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
           </div>
           <div className="input-group mb-3">
           <span className="input-group-text" id="inputGroup-sizing-default">description</span>
           <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
           </div>
           <div className="input-group mb-3">
           <span className="input-group-text" id="inputGroup-sizing-default">Poster Film</span>
           <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
           </div>
           <div className="input-group mb-3">
           <span className="input-group-text" id="inputGroup-sizing-default">Rating</span>
           <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
           </div>
           <button type="button" className="btn btn-success m-5 ">add 
           <i class="fas fa-check-square"></i>
           </button>
        </div>
    )
}

export default AddMoviePage
