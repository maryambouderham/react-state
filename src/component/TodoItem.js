import React from 'react'

const TodoItem = (props) => {
    
    return (
        <div>
         
        <li class="list-group-item d-flex justify-content-between"><p class="p-0 m-0 ">{props.title}</p> 
           <button class="btn btn-danger"
           OnClick={()=>props.OnClickDelete}
           ><i class="fas fa-trash-alt"></i></button>
        </li>

           
        </div>
    )
}

export default TodoItem
