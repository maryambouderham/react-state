import React from 'react'

const TodoItem = (props) => {
    
    return (
        <div>
         
        <li className="list-group-item d-flex justify-content-between"><p className="p-0 m-0 ">{props.title}</p> 
           <button 
           onClick={
               ()=>//console.log(props.indice)
               { if (window.confirm('Are you sure you wish to delete this item?')) 
              props.OnClickDelete(props.indice)}
            }
            className="btn btn-danger"
           ><i className="fas fa-trash-alt"></i>
           </button>
        </li>

           
        </div>
    )
}

export default TodoItem
