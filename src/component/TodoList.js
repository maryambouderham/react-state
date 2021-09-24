import React from 'react'
import TodoItem from './TodoItem'
const TodoList = (props) => {
    return (
        <div>
             <div class="input-group rounded w-25 mx-auto">
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon" />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
             </div>
             <ul class="list-group cProductsList p-5 w-50 mx-auto"> 
            {props.listTitles.map(t => 
                <TodoItem 
                    
                    title={t} 
                    
                    OnClickDelete={props.OnClickDeleteTitle(t)}
                    
                    />)}
            </ul>
        </div>
    )
}

export default TodoList
