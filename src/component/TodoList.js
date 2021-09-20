import React from 'react'
import TodoItem from './TodoItem'
const TodoList = (props) => {
    return (
        <div>
            <ul class="list-group cProductsList"> 
            {props.listTitles.map(titre => 
                <TodoItem 
                    
                    key={titre.id}
                    title={titre.title} 
                    
                    OnClickDeleteTitle={()=>props.OnClickDeleteMovie(movie.id)}
                    
                    />)}
            </ul>
        </div>
    )
}

export default TodoList
