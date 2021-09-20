import React from 'react'

const TodoItem = (data) => {
    return (
        <div>
            <li class="list-group-item d-flex"><p class="p-0 m-0 flex-grow-1">{data.title}</p> 
           <button onClick={data.OnClickDeleteTitle} class="btn-danger">DELETE</button>
        </li>
        </div>
    )
}

export default TodoItem
