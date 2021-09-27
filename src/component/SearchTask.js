import React from 'react'
import { useRef } from "react";
const SearchTask = (props) => {
    const inputsearch = useRef();
    return (
        <div>
        <div class="input-group rounded w-25 mx-auto">
        <input ref={inputsearch} 
        onKeyUp={()=>props.keyPressEvent(inputsearch.current.value)}
        type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon" />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
             </div>
        </div>
    )
}

export default SearchTask
