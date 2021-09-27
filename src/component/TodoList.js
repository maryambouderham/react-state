import React from 'react'
import TodoItem from './TodoItem'
const TodoList = (props) => {
    return (
        <div>
            
             <ul class="list-group cProductsList p-5 w-50 mx-auto"> 
            {props.listTitles.map((t,index) => 
                <TodoItem 
                    indice={index}
                    title={t} 
                    
                    OnClickDelete={props.OnClickDeleteTitle} 
                    
                    />)}
                   
            </ul>
        </div>
    )
}

export default TodoList
